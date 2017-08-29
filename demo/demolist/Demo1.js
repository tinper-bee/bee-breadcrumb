/**
 * @title Breadcrumb 
 * @description Breadcrumb.Item定义子面包，`active`参数定义当前状态。
 */

import React, { Component } from 'react';
import Breadcrumb from '../../src';

export default class Demo1 extends Component {
	render () {
		return (
			<Breadcrumb>
			    <Breadcrumb.Item href="#">
			      Home
			    </Breadcrumb.Item>
			    <Breadcrumb.Item>
			      Library
			    </Breadcrumb.Item>
			    <Breadcrumb.Item active>
			      Data
			    </Breadcrumb.Item>
			</Breadcrumb>
		)
	}
}