import React from 'react';
import { Button } from 'antd';

import './History.css'

class History extends React.Component {
    render() {
        return (
            <div className="history-container">
                <div className="history-header">
                    <h3 className="history-header-title">Últimas transações</h3>
                    <Button type="primary" shape="circle" icon="plus" size='large' />
                </div>
                <div className="history-list">

                </div>
            </div>
        )
    }
}

export default History;