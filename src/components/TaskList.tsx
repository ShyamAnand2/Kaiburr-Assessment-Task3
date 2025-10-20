import React from 'react';
import { Table, Button, Space, Tag, Popconfirm, Card } from 'antd';
import { DeleteOutlined, PlayCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { Task } from '../types/Task';
import ExecutionHistory from './ExecutionHistory';

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  onDelete: (id: string) => void;
  onExecute: (id: string) => void;
  onRefresh: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  loading,
  onDelete,
  onExecute,
  onRefresh
}) => {
  const columns = [
    {
      title: 'Task Name',
      dataIndex: 'name',
      key: 'name',
      width: '20%',
      render: (name: string) => (
        <span style={{ fontWeight: 600, fontSize: '15px' }}>{name}</span>
      ),
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
      width: '15%',
      render: (owner: string) => (
        <Tag color="purple" style={{ fontSize: '13px' }}>{owner}</Tag>
      ),
    },
    {
      title: 'Command',
      dataIndex: 'command',
      key: 'command',
      width: '30%',
      render: (command: string) => (
        <Tag 
          color="blue" 
          style={{ 
            padding: '6px 12px', 
            fontSize: '13px',
            fontFamily: 'monospace'
          }}
        >
          {command}
        </Tag>
      ),
    },
    {
      title: 'Executions',
      key: 'executions',
      width: '12%',
      align: 'center' as const,
      render: (record: Task) => (
        <Tag 
          color={record.taskExecutions && record.taskExecutions.length > 0 ? 'green' : 'default'}
          style={{ fontSize: '14px', fontWeight: 600 }}
        >
          {record.taskExecutions?.length || 0}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: '23%',
      render: (record: Task) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            onClick={() => onExecute(record.id!)}
            size="middle"
            style={{ fontWeight: 500 }}
          >
            Execute
          </Button>
          <Popconfirm
            title="Delete this task?"
            description="This action cannot be undone."
            onConfirm={() => onDelete(record.id!)}
            okText="Yes, Delete"
            cancelText="Cancel"
            okButtonProps={{ danger: true }}
          >
            <Button 
              danger 
              icon={<DeleteOutlined />} 
              size="middle"
              style={{ fontWeight: 500 }}
            >
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title={
        <span style={{ fontSize: '20px' }}>
          📋 All Tasks
        </span>
      }
      extra={
        <Button 
          icon={<ReloadOutlined />} 
          onClick={onRefresh}
          size="middle"
          style={{ fontWeight: 500 }}
        >
          Refresh
        </Button>
      }
      bodyStyle={{ padding: 0 }}
    >
      <Table
        columns={columns}
        dataSource={tasks}
        loading={loading}
        rowKey="id"
        expandable={{
          expandedRowRender: (record) => <ExecutionHistory executions={record.taskExecutions || []} />,
          rowExpandable: (record) => (record.taskExecutions?.length || 0) > 0,
        }}
        pagination={{ 
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} tasks`
        }}
        style={{ padding: '0' }}
      />
    </Card>
  );
};

export default TaskList;
