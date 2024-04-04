import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaFilePdf } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { BsFillPrinterFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

export default function ContenidoRegistros() {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((row) => row !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  return (
    <div>
      <section className="hero">
        {/* <!-- Contenedor de la cabecera--> */}
        <div className="contenido_hero">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1%",
              marginBottom: "2%",
            }}
          >
            <Dropdown className="d-inline mx-5 " autoClose="outside">
              <Dropdown.Toggle
                id="dropdown-autoclose-outside"
                style={{ width: "20rem", fontSize:"1.5rem", backgroundColor: "transparent" }}
                className=""
                variant="secondary"
              >
                Seleccione Quincena
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "20rem" }}>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-danger">
              <BsFillPrinterFill size={"35px"} />
            </Button>{" "}
            <Button variant="outline-danger">
              <FaFilePdf size={"35px"} />
            </Button>{" "}
            <Button variant="outline-danger">
              <SiMicrosoftexcel size={"35px"} />
            </Button>{" "}
          
          </div>
          <form action="/upload" method="POST" encType="multipart/form-data">
            <div className="input-group">
              <Table responsive className="table table-striped table-hover" style={{borderRadius:'5px !important'}}>
                <thead>
                  <tr>
                    <td></td>
                    <th>#</th>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <th key={index}>Table heading</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Check
                        type="checkbox"
                        aria-label="option 1"
                        checked={selectedRows.includes(1)}
                        onChange={() => handleRowSelect(1)}
                      />
                    </td>
                    <td>1</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>
                      <Form.Check
                        type="checkbox"
                        aria-label="option 2"
                        checked={selectedRows.includes(2)}
                        onChange={() => handleRowSelect(2)}
                      />
                    </td>
                    <td>2</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index}>Table1 cell {index}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>
                      <Form.Check
                        type="checkbox"
                        aria-label="option 3"
                        checked={selectedRows.includes(3)}
                        onChange={() => handleRowSelect(3)}
                      />
                    </td>
                    <td>3</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <td key={index}>Table cell {index}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
