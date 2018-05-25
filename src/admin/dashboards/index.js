import React, {Component} from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import AppBase, {
  $api, $store, ExmInfoCardItem, AntAbstractControllerIndex
} from 'components';

@mixin(['pure-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'pure';

  childView() {
    return (
      <div className="p20 dashboard-view">
        <Row gutter={40}>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="12" title="搭建商" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="3" title="报馆" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="112" title="施工人员" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="512" title="货车信息" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="1239" title="通知" apply/>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="12" title="搭建商" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="3" title="报馆" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="112" title="施工人员" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="512" title="货车信息" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="1239" title="通知" apply/>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="12" title="搭建商" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="3" title="报馆" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="112" title="施工人员" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="512" title="货车信息" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="1239" title="通知" apply/>
          </Col>
        </Row>
        <Row gutter={40}>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="12" title="搭建商" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="3" title="报馆" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="112" title="施工人员" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="512" title="货车信息" apply/>
          </Col>
          <Col span="6">
            <ExmInfoCardItem icon="file" count="1239" title="通知" apply/>
          </Col>
        </Row>
        <h3 className="f16 b">申请展位最多的搭建商历史记录</h3>
      </div>
    )
  }
}