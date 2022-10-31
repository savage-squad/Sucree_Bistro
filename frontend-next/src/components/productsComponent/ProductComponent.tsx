// Chakra imports
import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../card/CardComponent";
import CardBody from "../card/CardBodyComponent";
import CardHeader from "../card/CardHeader";
import TablesProjectRow from "../table/TablesTableRowComponent";
import React from "react";




const ProductComponent = function ({ title, captions, data }) {
    const textColor = useColorModeValue("gray.700", "white");
    return (
        <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p='6px 0px 22px 0px'>
                <Flex direction='column'>
                    <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
                        {title}
                    </Text>
                </Flex>
            </CardHeader>
            <CardBody>
                <Table variant='simple' color={textColor}>
                    <Thead>
                    {/* ps={idx === 0 ? "0px" : null} */}
                        <Tr my='.8rem' pl='0px'>
                            {captions.map((caption: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined, idx: React.Key | null | undefined) => {
                                return (
                                    <Th color='gray.400' key={idx}>
                                        {caption}
                                    </Th>
                                );
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((row: { name: any; logo: any; status: any; budget: any; progression: any; }) => {
                            return (
                                <TablesProjectRow
                                    key={row.name}
                                    name={row.name}
                                    logo={row.logo}
                                    status={row.status}
                                    budget={row.budget}
                                    progression={row.progression} />
                            );
                        })}
                    </Tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default ProductComponent;

