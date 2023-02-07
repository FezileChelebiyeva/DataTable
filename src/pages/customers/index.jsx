import React, { useEffect, useState } from "react";
import axios from "axios";
import TbodyComp from "../../components/tbody";
import { ChakraProvider } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

const CustomersPage = () => {
  const [dataCustomers, setDataCustomers] = useState([]);
  const [isLoaoding, setIsLoaoding] = useState(true);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/customers")
      .then((data) => setDataCustomers(data.data));
    setIsLoaoding(false);
  }, []);
  return (
    <ChakraProvider>
      {isLoaoding ? (
        <div
          style={{
            height: "80vh",
            wigth: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "150px",
          }}
        >
          <Spinner />
        </div>
      ) : (
        <>
          <h1
            style={{
              color: "rgb(22, 158, 113)",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "40px",
              fontSize: "30px",
            }}
          >
            Customers
          </h1>
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th style={{ textAlign: "center" }}>Id</Th>
                  <Th style={{ textAlign: "center" }}>Compnay Name</Th>
                  <Th style={{ textAlign: "center" }}>Contact Name</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataCustomers.map((element) => {
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
        </>
      )}
    </ChakraProvider>
  );
};

export default CustomersPage;
