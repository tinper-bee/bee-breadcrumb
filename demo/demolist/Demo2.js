/**
 * @title 带有图标的 
 * @description 图标放在文字前面。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Breadcrumb from '../../src';

class Demo2 extends Component {
	render () {
		return (
			<Breadcrumb>
			    <Breadcrumb.Item href="#">
                    <Icon type="uf-home"></Icon>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item>
                    <Icon type="uf-caven"></Icon>
                    <span>Application List</span>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item active>
			      Data
			    </Breadcrumb.Item>
			</Breadcrumb>
		)
	}
}

export default Demo2;