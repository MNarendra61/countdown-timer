import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
} from "@mui/material";

const Display = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <h1 style={{ color:"#f50057"}} >SALES COUNTDOWN TIMER</h1>
      <h2 style={{ color:"#f50057"}}>Offer ends in</h2>
      <TableContainer  component={Paper} spacing={5} className="myTable">
        <Table>
          <TableBody>
            <TableRow className="myTableRow">
                
              <TableCell className="myTableCell">{days}</TableCell><br></br><br></br>
              <TableCell className="myTableCell">{hours}</TableCell><br></br><br></br>
              <TableCell className="myTableCell">{minutes}</TableCell><br></br><br></br>
              <TableCell className="myTableCell">{seconds}</TableCell><br></br><br></br>
            </TableRow>
            <TableRow className="myTableRow">
              <TableCell >DAYS</TableCell><br></br><br></br>
              <TableCell>HOURS</TableCell><br></br><br></br>
              <TableCell>MINUTES</TableCell><br></br><br></br>
              <TableCell>SECONDS</TableCell><br></br><br></br>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Display;
