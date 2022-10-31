import { Flex } from "@chakra-ui/react";
import ProductComponent from "../../src/components/productsComponent/ProductComponent";
import { dashboardTableData } from "../../src/components/variables/general";

function TablesComponent() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      {/* <Authors
        title={"Authors Table"}
        captions={["Author", "Function", "Status", "Employed", ""]}
        data={tablesTableData}
      /> */}
      <ProductComponent
        title={"Productos"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default TablesComponent;