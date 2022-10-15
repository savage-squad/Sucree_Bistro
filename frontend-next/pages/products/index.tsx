import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { DeleteIcon } from "./componentsProducts/DeleteIcon";
import { EditIcon } from "./componentsProducts/EditIcon";
import { EyeIcon } from "./componentsProducts/EyeIcon";
import { IconButton } from "./componentsProducts/IconButton";
import { StyledBadge } from "./componentsProducts/StyledBadge";


type UserType = {
  id: string | number,
  name?: string,
  descricao?: string,
  preco?: string,
  team?: string,
  status: "active" | "paused" | "vacation",
  age?: string,
  avatar?: string,
};

export default function Products() {
  const columns = [
    { name: "PRODUTO", uid: "name" },
    { name: "PREÇO", uid: "preco" },
    { name: "STATUS", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users: UserType[] = [
    {
      id: 1,
      name: "Coxa de frango",
      preco: "R$ 80,00",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://cdn.panelinha.com.br/receita/1656511211550-coxa-de-frango%20com%20pera%20e%20geleia%20de%20laranja.jpg",
      descricao: "ASSADA COM GELEIA DE LARANJA E MINIPERAS",
    },
    {
      id: 2,
      name: "Feijoada Recipe",
      preco: "R$ 15,00",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://www.easyanddelish.com/wp-content/uploads/2012/04/feijoada-recipe-featured-image.jpg",
      descricao: "A Feijoada Completa",
    },
    {
      id: 3,
      name: "Bolo de Cenoura",
      preco: "R$ 36,00",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHQzeUHizd5dlfW8KmjwhNPFZCG3WJXDBT6D9L0SblmWff5jCuPW-WYpH8sRDt0HS3s-iwOp7UmBx68BMMIaOhDuPgRXR0iZWgDvn5u8SNw_mkOkYhnFz--diwllc&usqp=CAE",
      descricao: "Sem glúten, feito com leite de amêndoas",
    },
    {
      id: 4,
      name: "Porção de batata frita",
      preco: "R$ 10,00",
      team: "Marketing",
      status: "vacation",
      age: "28",
      avatar: "https://cdns1.2rscms.com.br/custom/617/uploads/cardapios/batatacardapio.jpg",
      descricao: "Com cheddar e bacon.",
    },
    {
      id: 5,
      name: "Salmão grelhado",
      preco: "R$ 90,00",
      team: "Sales",
      status: "active",
      age: "24",
      avatar: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTshsCjmUOCqBr3vG1bV87RWPIyPTSPbZF46rX9xAD3KyTbqjCJgLvcjdGUUMjggN_nBBeeKguDWbxJInzZrvsn3wK6EVqBMjEMOWU&usqp=CAE",
      descricao: "fresco em filé com pele",
    },
  ];
  const renderCell = (user: UserType, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof UserType];
    switch (columnKey) {
      case "name":
        return (
          <User squared src={user?.avatar} name={cellValue} css={{ p: 0 }}>
            {user?.descricao}
          </User>
        );
      case "role":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {user?.team}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user?.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View user", user?.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log("Edit user", user?.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log("Delete user", user?.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#CD5C5C" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      bordered
      shadow={false}
      selectionMode="multiple"
      css={{
        height: "auto",
        minWidth: "100%",
      }}

    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item: UserType) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination
        shadow
        noMargin
        align="center"
        rowsPerPage={5}
        onPageChange={(page) => console.log({ page })}
      />
    </Table>
  );
}
