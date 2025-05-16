import React from 'react'
import { Button, Checkbox, Form, Input} from 'antd'
import { useNavigate } from 'react-router-dom';


const CreateAuthor = () => {
const [form] = Form.useForm();
const navigate = useNavigate();

const handleCreateAuthor = async(values)=>{
    try {
        const response = await fetch("http://localhost:5000/api/authors",{
            method:"POST",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(values)
        });
        if (response.ok){
            navigate("/admin/authors");
        }else{
            console.log("yazar eklerken problem oluştu");
        }
    } catch (error) {
        console.log("Sunucu hatası:",error);
        
    }
}

  return (
    <>
      <Form name='basic' form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{remember:true}} onFinish={handleCreateAuthor} >
         <Form.Item label="Yazar adı" name="firstname">
            <Input/>
        </Form.Item>
        <Form.Item label="Yazar Soyadı" name="lastname">
            <Input/>
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
            <Button type='primary' htmlType='submit'>
                Submit
            </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateAuthor
