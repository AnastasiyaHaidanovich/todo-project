import React, {useState} from 'react';
import '../App.css';
import {Button, Input, List, Space, Switch, Typography} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import {DateTime} from "ts-luxon";
import {TaskItem} from "../models";

export function AddTaskForm () {
    const [state, setState] = useState({key: 0, task:"", date:"", done: false});
    const [taskKey, setTaskKey] = useState(0);
    const [tasksList, setTasksList] = useState(Array());

    function handleSubmit (e: React.FormEvent<HTMLAnchorElement | HTMLButtonElement> | React.FormEvent<HTMLButtonElement>) {
        setTaskKey(taskKey + 1);
        tasksList.push(state);
        setState({key: 0, task:"", date:"", done: false})
    }
    let counter : number = 1;

    return (
        <>
            <List className="tasks-list"
                  bordered
                  dataSource={ tasksList }
                  locale={{ emptyText: "No tasks" }}
                  renderItem={(item: TaskItem) => (
                      <List.Item
                          key={counter}
                          style={{ width: '100%', display: "flex", justifyContent: "space-between" }}
                          extra={<>
                              <p>{ item.date }</p>
                              <Button type="primary" shape="circle" icon={<DeleteOutlined />} onClick={()=> {
                                  setTasksList(tasksList.filter(obj => obj.key !== item.key))
                              }}/>
                          </>}
                      >
                          <Typography.Text style={{ width: '50%' }}>{ counter++ } { item.task }</Typography.Text>
                      </List.Item>
                  )}
            />
            <Space.Compact style={{ width: '100%' }} >
                <Input  type="text" value={state.task} onChange={(e) => setState({key: taskKey, task: e.target.value, date: DateTime.now().toLocaleString({day: 'numeric', month: 'long'}), done: false})} />
                <Button type="primary" disabled={state.task.trim() === ""} onClick={(e) => handleSubmit(e)}>Добавить</Button>
            </Space.Compact>
        </>
    )
}
