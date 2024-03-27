const asyncHandler = require("express-async-handler");
const db = require("../models");
const createContract = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { title, name, address, phone, construction, scale, budget } = req.body;
  const newContract = await db.Contract.create({
    userId: userId,
    title,
    name,
    address,
    phone,
    construction,
    scale,
    budget,
  });
  return res.json({ success: true, newContract });
});

const deleteContract = async (contractId) => {
  try {
    const deletedContract = await db.Contract.destroy({
      where: {
        id: contractId,
      },
    });
    console.log("Contract has been deleted:", contractId);
  } catch (error) {
    console.error("Error deleting contract:", error);
  }
};

const updateContractStatus = asyncHandler(async (req, res) => {
  const { contractId, status } = req.body;
  const currentTime = new Date();
  const currentTimeGMT7 = new Date(
    currentTime.valueOf() +
      currentTime.getTimezoneOffset() * 60000 +
      7 * 3600000
  );
  let updatedFields = { status: status };
  switch (status) {
    case "BUILDING":
      updatedFields.buildingTime = currentTimeGMT7;
      break;
    case "FINISHED":
      updatedFields.finishedTime = currentTimeGMT7;
      break;
    case "REPORT":
      updatedFields.reportTime = currentTimeGMT7;
      break;
    case "CANCEL":
      updatedFields.cancelTime = currentTimeGMT7;
      setTimeout(async () => {
        await deleteContract(contractId);
      }, 1 * 60 * 1000);
      break;
    default:
      break;
  }
  const [numAffectedRows] = await db.Contract.update(updatedFields, {
    where: { id: contractId },
  });
  if (numAffectedRows === 0) {
    return res
      .status(404)
      .json({ success: false, message: "Hợp đồng không tồn tại" });
  }
  res.json({ success: true, message: "Cập nhật trạng thái thành công" });
});

const getContractByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const allContract = await db.Contract.findAll();
  const userContract = allContract.filter((el) => el.userId === userId);

  return res.json({ success: true, userContract });
});

const getAllContract = asyncHandler(async (req, res) => {
  const { limit, page, ...query } = req.query;
  const options = {};
  if (!limit) {
    const response = await db.Contract.findAll({
      where: query,
      ...options,
    });
    return res.json({
      success: response.length > 0,
      message: response ? "Got" : "Cannot get contract",
      contract: response,
    });
  }
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const offset = (prevPage - 1) * limit;
  if (offset) {
    options.offset = offset;
  }
  options.limit = +limit;
  const response = await db.Contract.findAndCountAll({
    where: query,
    ...options,
  });
  return res.json({
    success: response.length > 0,
    message: response ? "Got" : "Cannot get properties",
    contract: response,
  });
});

const editContract = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    title,
    name,
    status,
    contract,
    address,
    construction,
    phone,
    scale,
    budget,
  } = req.body;
  const existedContract = await db.Contract.findByPk(id);
  if (!existedContract) {
    return res
      .json(404)
      .json({ success: false, message: "Contract not found" });
  }
  const editContract = await existedContract.update({
    title,
    status,
    contract,
    address,
    name,
    phone,
    construction,
    scale,
    budget,
  });
  return res.json({ success: true, message: "Update success", editContract });
});

module.exports = {
  createContract,
  getContractByUserId,
  getAllContract,
  editContract,
  updateContractStatus,
};
