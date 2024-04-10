import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaFilePdf } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { BsFillPrinterFill } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { MdWeekend } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdSearch } from "react-icons/io";

export default function TablasAsistencia() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const [showButtons, setShowButtons] = useState(false); // Estado para controlar la visibilidad de los botones

  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((row) => row !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  // Función para obtener todas las semanas del año
  const getWeeksInYear = (year) => {
    const weeks = [];
    const firstDayOfYear = new Date(year, 0, 1);
    const lastDayOfYear = new Date(year, 11, 31);
    let weekNumber = 1;
    let currentDay = firstDayOfYear;

    // Iterate through each week of the year
    while (currentDay <= lastDayOfYear) {
      const startOfWeek = new Date(currentDay);
      const endOfWeek = new Date(currentDay);
      endOfWeek.setDate(endOfWeek.getDate() + 6);

      weeks.push({
        weekNumber: weekNumber,
        startDate: startOfWeek,
        endDate: endOfWeek,
      });

      currentDay.setDate(currentDay.getDate() + 7);
      weekNumber++;
    }

    return weeks;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Función para manejar el cambio de semana seleccionada
  const handleWeekSelect = (week) => {
    // Aquí puedes realizar alguna acción con la semana seleccionada
    console.log("Semana seleccionada:", week);
  };

  // Obtener las semanas del año actual
  useEffect(() => {
    // Obtener las semanas del año actual
    const currentYear = new Date().getFullYear();
    const currentWeeks = getWeeksInYear(currentYear);
    setWeeks(currentWeeks);

    // Verificar si "museo" o "icti" está guardado en el localStorage
    const storedValue = localStorage.getItem("url");
    if (storedValue === "ICTI") {
      setShowButtons(true);
    }
  }, []);

  const seccion = (num) => {
    return (
      <tr key={num}>
        <td>
          <Form.Check
            type="checkbox"
            aria-label="option 1"
            checked={selectedRows.includes(num)}
            onChange={() => handleRowSelect(num)}
          />
        </td>
        <td>{num}</td>
        {Array.from({ length: 10 }).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>
    );
  };

  return (
    <div>
      <section className="hero">
        <div className="contenido_hero">
        {showButtons && ( // Mostrar los botones solo si showButtons es true
          <div>
            <Button variant="outline-warning">MUSEO</Button>{" "}
            <Button variant="outline-warning">ICTI</Button>{" "}
          </div>
)}
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
                  style={{
                    width: "20rem",
                    fontSize: "1.5rem",
                    backgroundColor: "transparent",
                  }}
                  className=""
                  variant="secondary"
                >
                  Seleccione Semana
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    width: "20rem",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {weeks.map((week, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleWeekSelect(week)}
                    >
                      Semana {week.weekNumber}: {formatDate(week.startDate)} -{" "}
                      {formatDate(week.endDate)}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Buscar por nombre"
                      className=" mr-sm-2"
                      style={{ height: "3rem", width: "20rem" }}
                    />
                  </Col>
                  <Col xs="auto">
                    <Button
                      type="submit"
                      style={{ height: "3rem", width: "5rem" }}
                      variant="outline-danger"
                    >
                      <IoMdSearch size={"25px"} />
                    </Button>
                  </Col>
                </Row>
              </Form>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10%",
                  marginLeft: "60rem",
                  flexWrap: "nowrap",
                }}
              >
                <Button variant="outline-danger">
                  <BsFillPrinterFill size={"35px"} />
                </Button>{" "}
                <Button variant="outline-danger">
                  <FaFilePdf size={"35px"} />
                </Button>{" "}
                <Button variant="outline-danger">
                  <SiMicrosoftexcel size={"35px"} />
                </Button>{" "}
                <Button variant="outline-primary">
                  <MdWeekend size={"35px"} />
                </Button>{" "}
              </div>
            </div>
          <form action="/upload" method="POST" encType="multipart/form-data">
            <div className="input-group">
              <Table
                responsive
                className="table table-striped table-hover"
                style={{ borderRadius: "5px !important" }}
              >
                <thead>
                  <tr>
                    <td></td>
                    <th>ID</th>
                    <th>Trabajador</th>
                    {Array.from({ length: 9 }).map((_, index) => (
                      <th key={index}>Table heading</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 4 }).map((_, index) => (
                    seccion(index + 1)
                  ))}
                </tbody>
              </Table>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
