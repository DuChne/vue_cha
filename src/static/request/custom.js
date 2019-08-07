import request from './index.js'
import { api, tempApi} from './api'
// 已发布表单  编辑已发布表单

/**
*	使用时例：
*		在页面中引入-->	import request from 'custom.js'// 引入此文件
*			request.publishForm('参数').then((res)=>{
*				console.log(res)
*			})
*			request.publishForm().then((res)=>{
*				console.log(res)
*			})
*
*/

// export const speed = data=>{
//   request({
//     method: 'GET',
//     url:`${tempApi}/speed.min.js?v=170721` //个是干什么的？
//   })
// }
export const jiekou = data=>{
  request({
    method: 'GET',
    url:`${api}`
  })
}

export const publishForm = data =>
  request({
	//请求方式
    method: 'POST',
	//url
    url: `${api}/forms/formDataModel`,
	//头部信息
    headers: {
      'content-type': 'application/json;utf-8'
    },
	// data:data -- body:数据
	// params 会自动拼接URL
    data: data
  })
// 保存表单
export const queryFormBySaveFormData = data =>
  request({
    method: 'POST',
    url: `${api}/forms/formContent`,
    headers: {
      'content-type': 'application/json;utf-8'
    },
    data: data
  })
// 发起流程--创建  工单
export const createProcessInstance = (processDefinitionId, data) =>
  request({
    method: 'POST',
    url: `${api}/runtime/processInstances/${processDefinitionId}`,
    headers: {
      'content-type': 'application/json;utf-8'
    },
    data: data
  })
// 编辑表单数据
export const changeFormData = (tableName, data) =>
  request({
    method: 'PUT',
    url: `${api}/forms/formContent/${tableName}`,
    data: data
  })
// 删除表单
export const delFormContent = tableName =>
  request({
    method: 'DELETE',
    url: `${api}/forms/formContent/${tableName}`
  })
// 删除已发布表单
export const delpublishForm = tableName =>
  request({
    method: 'DELETE',
    url: `${api}/forms/formDataModel/${tableName}`
  })

// 查询表单内容
export const queryFormByProcessDefine = params =>
  request({
    method: 'GET',
    url: `${api}/forms/formContent`,
    params
  })
// 创建表单是判断表名称是否存在
export const queryTableName = (tableName, params) =>
  request({
    method: 'GET',
    url: `${api}/forms/formDataModel/${tableName}`,
    params
  })
// 查询已发布表单
export const queryFormByPublishForm = params =>
  request({
    method: 'GET',
    url: `${api}/forms/formContentRelease`,
    params
  })
// 已保存表单
export const queryFormBySaveForm = params =>
  request({
    method: 'GET',
    url: `${api}/forms/formContent`,
    params
  })

// 获取所有没被关联的流程定义ID
export const queryNotUsedProcessDeFineID = params =>
  request({
    method: 'GET',
    url: `${api}/forms/latestVersionProcessDefinitions`,
    params
  })

// 获取将要关联流程的所有 Keys
export const getProcessDefineKeys = processDefineID =>
  request({
    method: 'GET',
    url: `${api}/processDefinitions/${processDefineID}/taskDefinitionKeys`
  })

// 权限------------------------------
export const findByProcessDefinitionId = params =>
  request({
    method: 'GET',
    url: `${api}/forms/tasksPermission/findByProcessDefinitionId`,
    params
  })

// 表单数据updateFormData
export const addFormData = params =>
  request({
    method: 'POST',
    url: `${api}/forms/formData`,
    data: params
  })
export const updateFormData = params =>
  request({
    method: 'PUT',
    url: `${api}/forms/formData`,
    data: params
  })
// 当前任务流程节点
export const runtimeTasks = params =>
  request({
    method: 'GET',
    url: `${api}/runtime/tasks`,
    params
  })
// 工单任务提交
export const runtimeTaskSubmit = (taskId, params) =>
  request({
    method: 'POST',
    url: `${api}/runtime/tasks/${taskId}`,
    data: params
  })

// test Permission
// export const loginPermission = (moduleName, userID) =>
//   request({
//     method: 'GET',
//     url: `http://192.168.157.141:8092/pps/api/v1/dcl/findDclInfoByGroupName?groupName=${moduleName}&userId=${userID}`
//   })
// test Permission
