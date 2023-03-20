import React, {useState} from 'react';
import '../App.css';
import {Button, Input, List, Space, Switch, Typography} from 'antd';
import {DateTime} from "ts-luxon";
import  {tasksList} from './tasksList';
import {TaskItem} from "../models";

export function AddTaskForm () {
    const [state, setState] = useState({task:"", date:"", done: false});
    // const [done, setDone] = useState(false);

    function handleSubmit (e: React.FormEvent<HTMLAnchorElement | HTMLButtonElement> | React.FormEvent<HTMLButtonElement>) {
        tasksList.push(state)
        setState({task:"", date:"", done: false})
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
                              <Switch
                                  checked={item.done}
                                  checkedChildren="Done"
                                  unCheckedChildren="Planned"
                                  onChange={() => {
                                      item.done= !item.done;
                                  }}
                              />
                          </>}
                      >
                          <Typography.Text style={{ width: '50%' }}>{ counter++ } { item.task }</Typography.Text>
                      </List.Item>
                  )}
            />
            <Space.Compact style={{ width: '100%' }} >
                <Input  type="text" value={state.task} onChange={(e) => setState({task: e.target.value, date: DateTime.now().toLocaleString({day: 'numeric', month: 'long'}), done: false})} />
                <Button type="primary" disabled={state.task.trim() === ""} onClick={(e) => handleSubmit(e)}>Добавить</Button>
            </Space.Compact>
        </>
    )
}
