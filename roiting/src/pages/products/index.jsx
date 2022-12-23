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
const ProductsPage = () => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((data) => setDataProducts(data.data));
  }, []);
  return (
    <ChakraProvider>
      <h1 style={{ color: "blue", fontWeight: "bold" }}>Products Page</h1>
      <TableContainer style={{ textAlign: "start" }}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th style={{ textAlign: "center" }}>Id</Th>
              <Th style={{ textAlign: "center" }}>Category Id</Th>
              <Th style={{ textAlign: "center" }}>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataProducts.map((element) => {
              return (
                <TbodyComp
                  key={element.id}
                  id={element.id}
                  categoryId={element.categoryId}
                  name={element.name}
                />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </ChakraProvider>
  );
};

export default ProductsPage;
