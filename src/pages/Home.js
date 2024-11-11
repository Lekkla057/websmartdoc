import { Component } from "react";
import { Link } from "react-router-dom";
import { LineChart, Line,XAxis,YAxis,CartesianGrid,ResponsiveContainer } from "recharts";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  interval = () =>
    setInterval(() => {
      fetch("https://serversmartdoc.onrender.com/test")
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result);
            if (this.state.data != result) {
              this.setState({ data: result });
            }
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }, 1000);
  componentDidMount = () => {
    fetch("https://serversmartdoc.onrender.com/test")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          if (this.state.data != result) {
            this.setState({ data: result });
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    this.interval();
  };
  render() {
    return (
      <div style={{ alignItems: "center", placeItems: "center" }}>
        <h1>ประวัติข้อมูลสุขภาพ</h1>
        <br></br>
        <ResponsiveContainer width="80%" height={400}>
        <LineChart  data={this.state.data}>
          <Line type="monotone" dataKey="C" stroke="red" />
          <Line type="monotone" dataKey="O2" stroke="grey" />
          <Line type="monotone" dataKey="heartRate" stroke="green" />
          <Line type="monotone" dataKey="weight" stroke="yellow" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <YAxis />
          <XAxis dataKey="date" />
        </LineChart>
        </ResponsiveContainer>

        <div style={{display:"flex"}}>
        <span style={{display:"flex",alignItems:"center"}}><div style={{width:10,height:10,background:"red",marginRight:5}}></div>อุณหภูมิ</span>
        <span style={{display:"flex",alignItems:"center"}}><div style={{width:10,height:10,background:"grey",marginRight:5}}></div>ค่าออกซิเจน</span>
        <span style={{display:"flex",alignItems:"center"}}><div style={{width:10,height:10,background:"green",marginRight:5}}></div>อัตราการเต้นของหัวใจ</span>
        <span style={{display:"flex",alignItems:"center"}}><div style={{width:10,height:10,background:"yellow",marginRight:5}}></div>น้ำหนัก</span>
        </div><br></br>
        <table
          style={{
            width: "60%",
            textAlign: "center",
            border: "1px solid",
            fontSize: 30,
          }}
        >
          <tr style={{ margin: 10 }}>
            <th style={{ borderBottom: "1px solid" }}>#</th>
            <th style={{ borderBottom: "1px solid" }}>รหัสผู้ป่วย</th>
            <th style={{ borderBottom: "1px solid" }}>วันที่</th>
            <th style={{ borderBottom: "1px solid" }}></th>
          </tr>
          {this.state.data.map((item, index) => (
            <tr>
              <td style={{ background: index % 2 == 0 ? "#ede6e6" : "white" }}>
                {index}
              </td>
              <td style={{ background: index % 2 == 0 ? "#ede6e6" : "white" }}>
                {item.userID}
              </td>
              <td style={{ background: index % 2 == 0 ? "#ede6e6" : "white" }}>
                {item.date}
              </td>
              <td style={{ background: index % 2 == 0 ? "#ede6e6" : "white" }}>
                <Link
                  to={`/Detail?userID=${item.userID}&date=${item.date}&C=${item.C}&O2=${item.O2}&heartRate=${item.heartRate}&weight=${item.weight}`}
                >
                  <button
                    style={{
                      width: "100%",
                      background: "darkgreen",
                      borderRadius: 20,
                      border: 1,
                      fontSize: 30,
                      color: "wheat",
                    }}
                  >
                    ดูรายละเอียด
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default Home;
