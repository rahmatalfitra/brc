import React, {useState} from "react";
import { Button, Form, FormGroup, Input, Label, Row, Col, Container } from "reactstrap";

  const FormHandling = ({mobil, setResult}) => {
    const [formNamaMobil, setFormNamaMobil] = useState();
    const [formKategori, setFormKategori] = useState();
    const [formHargaMobil, setFormHargaMobil] = useState();
    const [formStatus, setFormStatus] = useState();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      alert (formStatus)

        const carsFiltered = mobil.filter((item)=>{

        if (formNamaMobil) {
             if (item.name === formNamaMobil) {
                return true
                } else return false
         }

        if (formKategori) {
          if (item.category === formKategori) {
             return true
             } else return false
        }

         if (formHargaMobil) {
              if (formHargaMobil === "Rp. 0 - 400.000,-") {
                  return item.price < 400000
              } if (formHargaMobil === "Rp. 400.000 - 800.000,-") {
                  return item.price >= 400000 && item.price <= 800000 
              } if (formHargaMobil === "Rp. 800.000 - ~") {
                  return item.price > 800000
              } else return false
          }

          if (formStatus) {
            if (formStatus === "Available") {
              return item.status===false;
            } else return item.status===true;
          } 

          
        // return (
        //     item.name === formNamaMobil &&
        //     item.category === formKategori &&
        //     item.price 
        //     )  
        })
        setResult (carsFiltered);
        console.log(carsFiltered);
    }


    return (
        <Container className="containerform">
          <p><b>Pencarianmu</b></p>
          <Form>
                <Row className="formpencarian">
                  <Col>
                <FormGroup>
                    <Label>Nama Kendaraan</Label>
                    <Input type="text" id="namamobil" onChange={(e)=>setFormNamaMobil(e.target.value) } placeholder="Isikan Nama Mobil"> </Input>
                </FormGroup>
                </Col>

                <Col>
                <FormGroup>
                    <Label>Pilih Kategori</Label>
                    <Input type="select" name="kategorimobil" id="kategori" onChange={(e)=>setFormKategori(e.target.value)}>
                        <option placeholder="[Kosong]" ></option>
                        <option>2 - 4 orang</option>
                        <option>4 - 6 orang</option>
                        <option>6 - 8 orang</option>
                    </Input>
                </FormGroup>
                </Col>

                <Col>
                <FormGroup>
                    <Label>Harga</Label>
                    <Input type="select" name="harga" id="harga" onChange={(e)=>setFormHargaMobil(e.target.value)}>
                        <option placeholder="[Kosong]" ></option>
                        <option>Rp. 0 - 400.000,-</option>
                        <option>Rp. 400.000 - 800.000,-</option>
                        <option>Rp. 800.000 - ~</option>
                    </Input>
                </FormGroup>
                </Col>

                <Col>
                <FormGroup>
                    <Label>Status</Label>
                    <Input type="select" name="status" id="status" onChange={(e)=>setFormStatus(e.target.value)}>
                        <option placeholder="[Kosong]" ></option>
                        <option>Available</option>
                        <option>Sedang Disewa</option>
                    </Input>
                </FormGroup>
                </Col>

                <Col>
                <br/>
              <Button className="buttoncari" type="submit" onClick={(e)=>{handleSubmit(e)}}>Cari Mobil</Button>
              </Col>
              </Row>
          </Form>
        </Container>
    )
  }



export default FormHandling;
