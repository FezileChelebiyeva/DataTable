import React, { useEffect, useState } from "react";
import axios from "axios";
import TbodyComp from "../../components/tbody";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
const SuppliersPage = () => {
  const [dataSuppliers, setDataSuppliers] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/suppliers")
      .then((data) => setDataSuppliers(data.data));
  }, []);

  return (
    <ChakraProvider>
      <h1 style={{ color: "blue", fontWeight: "bold" }}>Suppliers Page</h1>
      <TableContainer style={{ textAlign: "start" }}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th style={{ textAlign: "center" }}>Id</Th>
              <Th style={{ textAlign: "center" }}>Compnay Name</Th>
              <Th style={{ textAlign: "center" }}>Contact Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataSuppliers.map((element) => {
              return (
                <TbodyComp
                  key={element.id}
                  id={element.id}
                  companyName={element.companyName}
                  contactName={element.companyName}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
};

export default SuppliersPage;
