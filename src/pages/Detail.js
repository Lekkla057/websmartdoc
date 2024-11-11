import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";

function Detail(props) {
  console.log(props);
  const { group, id } = useParams();
  const [searchParams] = useSearchParams();
  // const searchParams = new URLSearchParams(props.location.search);
  const userID = searchParams.get("userID");
  const date = searchParams.get("date");
  const C = searchParams.get("C");
  const O2 = searchParams.get("O2");
  const heartRate = searchParams.get("heartRate");
  const weight = searchParams.get("weight");

  return (
    <div style={{ justifyItems: "center", width: "100%" }}>
        <br></br>
      <div style={{ width: "50%", border: "1px solid", borderRadius: 20 ,textAlign:"center"}}>
        <h1> ข้อมูลสุขภาพประจำวัน </h1>
      <div style={{display:'flex'}}>
          <h2 style={{width: "50%",background:"darkblue",color:"white", margin:0,alignContent:"center" }}>ชื่อ:</h2>
          <h2 style={{width: "50%" }}> {userID}</h2>
        </div>
        <div style={{display:'flex'}}>
          <h2 style={{width: "50%",background:"darkblue",color:"white", margin:0,alignContent:"center" }}>วันที่:</h2>
          <h2 style={{width: "50%" }}> {date}</h2>
        </div>
        <div style={{display:'flex',background:C>=36.5&&C<=37.4?"white":"#a8200d"}}>
          <h2 style={{width: "50%",background:"darkblue",color:"white", margin:0 ,alignContent:"center"}}>อุณหภูมิ:</h2>
          <h2 style={{width: "50%" }}> {C}</h2>
        </div>
        <div style={{display:'flex',background:O2>=96&&O2<=99?"white":"#a8200d"}}>
          <h2 style={{width: "50%",background:"darkblue",color:"white", margin:0,alignContent:"center" }}>ค่าออกซิเจน:</h2>
          <h2 style={{width: "50%" }}> {O2}</h2>
        </div>
        <div style={{display:'flex',background:heartRate>=60&&heartRate<=100?"white":"#a8200d"}}>
          <h2 style={{width: "50%",background:"darkblue",color:"white", margin:0 ,alignContent:"center"}}>อัตราการเต้นของหัวใจ</h2>
          <h2 style={{width: "50%" }}> {heartRate}</h2>
        </div>
        <div style={{display:'flex'}}>
          <h2 style={{width: "50%",background:"darkblue",color:"white", margin:0,alignContent:"center",borderBottomLeftRadius: 20}}>น้ำหนัก:</h2>
          <h2 style={{width: "50%" }}> {weight}</h2>
        </div>

      </div>
    </div>
  );
}
export default Detail;
