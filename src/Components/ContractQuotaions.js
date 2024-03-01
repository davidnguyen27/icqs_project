import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";

const ContractQuotations = () => {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      contractName: "Contract 1",
      date: "2024-02-13",
      price: 100,
      status: "pending",
    },
    {
      id: 2,
      contractName: "Contract 2",
      date: "2024-02-14",
      price: 150,
      status: "done",
    },
    {
      id: 3,
      contractName: "Contract 3",
      date: "2024-02-15",
      price: 200,
      status: "pending",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editContract, setEditContract] = useState(null);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = (contract) => {
    setEditContract(contract);
  };

  const handleSave = () => {
    // Check if all fields are filled
    if (
      !editContract.contractName ||
      !editContract.date ||
      !editContract.price ||
      !editContract.status
    ) {
      // If any field is empty, alert the user and do not proceed
      alert("Please fill in all fields.");
      return;
    }

    // Save or update the contract
    if (editContract.id) {
      // If editContract has an id, update the existing contract
      setContracts(
        contracts.map((c) => (c.id === editContract.id ? editContract : c))
      );
    } else {
      // If editContract is new (no id), add it as a new contract
      const newContract = { id: contracts.length + 1, ...editContract };
      setContracts([...contracts, newContract]);
    }

    // Clear editContract
    setEditContract(null);
  };

  const handleCancelEdit = () => {
    // Clear editContract
    setEditContract(null);
  };

  const filteredContracts = contracts.filter((contract) =>
    contract.contractName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <Grid item xs={10}>
        <Paper style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Contract Quotations
          </Typography>
          <TextField
            label="Search by Contract Name"
            value={searchTerm}
            onChange={handleSearchTermChange}
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => setEditContract({})}
            style={{ marginBottom: "20px" }}
          >
            Add Contract
          </Button>
          <TableContainer component={Paper} style={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Contract Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContracts.map((contract) => (
                  <TableRow key={contract.id}>
                    <TableCell>{contract.id}</TableCell>
                    <TableCell>{contract.contractName}</TableCell>
                    <TableCell>{contract.date}</TableCell>
                    <TableCell>{contract.price}</TableCell>
                    <TableCell>{contract.status}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() => handleEdit(contract)}
                        style={{ marginRight: "10px" }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={() =>
                          setContracts(
                            contracts.filter((c) => c.id !== contract.id)
                          )
                        }
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {editContract && (
            <div style={{ marginTop: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {editContract.id ? "Edit Contract" : "Add Contract"}
              </Typography>
              <TextField
                label="Contract Name"
                value={editContract.contractName || ""}
                onChange={(e) =>
                  setEditContract({
                    ...editContract,
                    contractName: e.target.value,
                  })
                }
                fullWidth
                style={{ marginBottom: "10px" }}
              />
              <TextField
                label="Date"
                type="date"
                value={editContract.date || ""}
                onChange={(e) =>
                  setEditContract({ ...editContract, date: e.target.value })
                }
                fullWidth
                style={{ marginBottom: "10px" }}
              />
              <TextField
                label="Price"
                type="number"
                value={editContract.price || ""}
                onChange={(e) =>
                  setEditContract({ ...editContract, price: e.target.value })
                }
                fullWidth
                style={{ marginBottom: "10px" }}
              />
              <Select
                label="Status"
                value={editContract.status || ""}
                onChange={(e) =>
                  setEditContract({ ...editContract, status: e.target.value })
                }
                fullWidth
                style={{ marginBottom: "10px",textAlign: 'left' }}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                style={{ marginRight: "10px" }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancelEdit}
              >
                Cancel
              </Button>
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ContractQuotations;
