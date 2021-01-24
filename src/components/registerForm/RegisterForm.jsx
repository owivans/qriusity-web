import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Avatar from '../avatar/avatar';
import './style.scss';

const RegisterForm = ({ onSubmit, fetchingData, urlAvatar }) => {
	return (
		fetchingData ? <Spin /> :
			<div className='register-view fade-in'>
        <div className='register-view__container'>
          <h1>👋 Hi, Welcome to <span className='logo-text'>Qriusity</span>!</h1>
				<div className='register-view__container__form'>
					<div className='register-view__container__avatar'><Avatar src={urlAvatar} size={100} /></div>
					<Form
						name="normal_login"
						className="login-form"
						onFinish={onSubmit}
					>
						<Form.Item
							name="name"
							rules={[{ required: true, message: 'Please input your Username!' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
						</Form.Item>
						<Form.Item
							name="nickName"
							rules={[{ required: true, message: 'Ingresa un sobrenobre!' }]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								placeholder="Nickname"
							/>
						</Form.Item>
						<Form.Item
							name="email"
							rules={[{ required: true, message: 'Please input your Email!' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" type='email' />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								Log in
						</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
			</div>
	)
};

export default RegisterForm;
