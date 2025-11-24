// import React from "react";
// import { Col, Form, message, Row } from "antd";
// import { useNavigate } from "react-router-dom";
// import { RegisterUser } from "../../apicalls/users";
// import { useDispatch } from "react-redux";
// import { HideLoading, ShowLoading } from "../../redux/loadersSlice";


// function Register() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const onFinish = async (values) => {
//     try {
//       dispatch(ShowLoading());
//       const response = await RegisterUser(values);
//       dispatch(HideLoading())
//       if (response.success) {
//         message.success(response.message);
//         navigate("/login");
//       } else {
//         message.error(response.message);
//       }
//     } catch (error) {
//       dispatch(HideLoading())
//       message.error(error.message);
//     }
//   };

//   return (
//     <div className="m-5">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl"> DacPay - Register</h1>

//        <h1 className="text-sm underline" onClick={() => navigate("/login")}>
//          <mark className="mark"> Already a member , Log in</mark>
//         </h1>
//       </div>
//       <hr />
//       <Form layout="vertical" onFinish={onFinish}>
//         <Row gutter={16}>
//           <Col span={6}>
//             <Form.Item label="First Name" name="firstName">
//               <input type="text" />
//             </Form.Item>
//           </Col>
//           <Col span={6}>
//             <Form.Item label="Last Name" name="lastName">
//               <input type="text" />
//             </Form.Item>
//           </Col>
//           <Col span={6}>
//             <Form.Item label="Email" name="email">
//               <input type="text" />
//             </Form.Item>
//           </Col>
          
//           <Col span={6}>
//             <Form.Item label="Mobile" name="phoneNumber">
//               <input type="text" />
//             </Form.Item>
//           </Col>

//           <Col span={6}>
//             <Form.Item label="Identification Type" name="identificationType">
//               <select>
//                 <option value="NATIONAL ID">National ID</option>
//                 <option value="PASSPORT">Passport</option>
//                 <option value="DRIVING LICENSE">Driving License</option>
//                 <option value="SOCIAL CARD">Pancard (SSN)</option>
//               </select>
//             </Form.Item>
//           </Col>

//           <Col span={6}>
//             <Form.Item
//               label="Identification Number"
//               name="identificationNumber"
//             >
//               <input type="text" />
//             </Form.Item>
//           </Col>

//           <Col span={24}>
//             <Form.Item label="Address" name="address" className="area">
//               <textarea type="text" />
//             </Form.Item>
//           </Col>

//           <Col span={6}>
//             <Form.Item label="Password" name="password">
//               <input type="password" />
//             </Form.Item>
//           </Col>

//           <Col span={6}>
//             <Form.Item label="Confirm Password" name="confirmPassword">
//               <input type="password" />
//             </Form.Item>
//           </Col>
//         </Row>

//         <div className="flex justify-end">
//           <button className="primary-contained-btn" type="submit">
//             Register
//           </button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// export default Register;

import React from "react";
import { Col, Form, message, Row, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

const { TextArea } = Input;

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);
      dispatch(HideLoading());

      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="m-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">DacPay - Register</h1>

        <h1 className="text-sm underline" onClick={() => navigate("/login")}>
          <mark className="mark">Already a member, Log in</mark>
        </h1>
      </div>

      <hr />

      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={16}>

          {/* First Name */}
          <Col span={6}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input placeholder="Enter first name" />
            </Form.Item>
          </Col>

          {/* Last Name */}
          <Col span={6}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Last name is required" }]}
            >
              <Input placeholder="Enter last name" />
            </Form.Item>
          </Col>

          {/* Email */}
          <Col span={6}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
          </Col>

          {/* Mobile */}
          <Col span={6}>
            <Form.Item
              label="Mobile"
              name="phoneNumber"
              rules={[{ required: true, message: "Mobile number is required" }]}
            >
              <Input placeholder="Enter mobile number" />
            </Form.Item>
          </Col>

          {/* Identification Type */}
          <Col span={6}>
            <Form.Item
              label="Identification Type"
              name="identificationType"
              rules={[{ required: true, message: "Please select ID type" }]}
            >
              <Select placeholder="Select identification">
                <Select.Option value="NATIONAL ID">National ID</Select.Option>
                <Select.Option value="PASSPORT">Passport</Select.Option>
                <Select.Option value="DRIVING LICENSE">Driving License</Select.Option>
                <Select.Option value="SOCIAL CARD">Pancard (SSN)</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Identification Number */}
          <Col span={6}>
            <Form.Item
              label="Identification Number"
              name="identificationNumber"
              rules={[{ required: true, message: "Identification number is required" }]}
            >
              <Input placeholder="Enter ID number" />
            </Form.Item>
          </Col>

          {/* Address */}
          <Col span={24}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Address is required" }]}
            >
              <TextArea rows={3} placeholder="Enter full address" />
            </Form.Item>
          </Col>

          {/* Password */}
          <Col span={6}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>
          </Col>

          {/* Confirm Password */}
          <Col span={6}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match!");
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm password" />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button className="primary-contained-btn" type="submit">
            Register
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
