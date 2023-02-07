import React, { useEffect, useState } from "react";
import axios from "axios";
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
import TbodyComp from "../../components/tbody";
import { Spinner } from "@chakra-ui/react";

const OrdersPage = () => {
  const [dataOrders, setDataOrders] = useState([]);
  const [isLoaoding, setIsLoaoding] = useState(true);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/orders")
      .then((data) => setDataOrders(data.data));
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
            Orders
          </h1>
          <TableContainer style={{ textAlign: "start" }}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th style={{ textAlign: "center" }}>Id</Th>
                  <Th style={{ textAlign: "center" }}>Customer Id</Th>
                  <Th style={{ textAlign: "center" }}>Order Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataOrders.map((element) => {
                  return (
                    <TbodyComp
                      key={element.id}
                      id={element.id}
                      customerId={element.customerId}
                      orderDate={element.orderDate}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      )}
    </ChakraProvider>
    // <div>
    //   <h1>Orders Page</h1>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Id</th>
    //         <th></th>
    //         <th></th>
    //       </tr>
    //     </thead>
    //   </table>
    // </div>
  );
};

export default OrdersPage;
