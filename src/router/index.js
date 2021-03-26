import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import { setToken, getToken } from '@/utils/auth'
import qs from 'qs'
import Store from '../store/index'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/supplier',
      name: 'supplier',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/basic-info/Supplier/Suppliers.vue')
    },
    {
      path: '/keyevents',
      name: 'keyevents',
      component: () => import('@/views/basic-info/KeyEvents.vue')
    },
    {
      path: '/demands_and_interviews/budget',
      name: 'budget',
      component: () => import('@/views/demands_and_interviews/budget/budget.vue')
    },
    // {
    //   path: '/demands_and_interviews/progress',
    //   name: 'progress',
    //   component: () => import('@/views/demands_and_interviews/DemandProgress.vue')
    // },
    {
      path: '/contract',
      name: 'contract',
      component: () => import('@/views/basic-info/Contract/Contract.vue')
    },
    {
      path: '/work-area',
      name: 'work-area',
      component: () => import('@/views/basic-info/WorkArea.vue')
    },
    {
      path: '/work-calendar',
      name: 'work-calendar',
      component: () => import('@/views/basic-info/WorkCalendar.vue')
    },
    {
      path: '/demands_and_interviews/demands',
      name: 'demands',
      component: () => import('@/views/demands_and_interviews/Demand/Demand.vue')
    },
    // {
    //   path: '/demands_and_interviews/new-demand',
    //   name: 'new-demand',
    //   component: () => import('@/views/demands_and_interviews/Demand/Newdemand.vue')
    // },
    // {
    //   path: '/demands_and_interviews/approval-process',
    //   name: 'approval-process',
    //   component: () => import('@/views/demands_and_interviews/Demand/ApprovalProcess.vue')
    // },
    {
      path: '/resource-pool/tm-person',
      name: 'tm-person',
      component: () => import('@/views/resource-pool/TmPerspon/TmPerspon.vue')
    },
    {
      path: '/resource-pool/fp-person',
      name: 'fp-person',
      component: () => import('@/views/resource-pool/FpPerspon/FpPerspon.vue')
    },
    {
      path: '/resource-pool/exit-manager',
      name: 'exit-manager',
      component: () => import('@/views/resource-pool/ExitManager/ExitManager.vue')
    },
    {
      path: '/resource-pool/move-organization',
      name: 'move-organization',
      component: () => import('@/views/resource-pool/MoveOrganization/MoveOrganization.vue')
    },
    {
      path: '/resource-pool/blackList',
      name: 'black-list',
      component: () => import('@/views/resource-pool/BlackList/Index.vue')
    },
    {
      path: '/settlement/account',
      name: 'account',
      component: () => import('@/views/settlement/Account/Account.vue')
    },
    {
      path: '/settlement/search',
      name: 'search',
      component: () => import('@/views/settlement/search/Search.vue')
    },
    {
      path: '/settlement/budgetPerform',
      name: 'budgetPerform',
      component: () => import('@/views/settlement/budgetPerform/BudgetPerform.vue')
    },
    {
      path: '/settlement/payment',
      name: 'payment',
      component: () => import('@/views/settlement/payOrder/payOrderList.vue')
    },
    {
      path: '/settlement/others',
      name: 'others',
      component: () => import('@/views/settlement/others/Others.vue')
    },
    {
      path: '/demands_and_interviews/interviews',
      name: 'interviews',
      component: () => import('@/views/demands_and_interviews/Interviews/Interviews.vue')
    },
    {
      path: '/demands_and_interviews/interview-approve',
      name: 'interviewapprove',
      component: () => import('@/views/demands_and_interviews/Interviews/InterviewApprove.vue')
    },
    {
      path: '/talentpool/talent',
      name: 'talentpool',
      component: () => import('@/views/talentpool/Talent.vue')
    },
    {
      path: '/work_schedule/worktime',
      component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/work_schedule/worktime/worktime.vue'),
      children: [
        {
          path: '',
          name: 'worktimeList',
          component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/work_schedule/worktime/workTimeMonth/worktimeList.vue')
        },
        {
          path: ':worktimeId',
          name: 'worktimeDetail',
          component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/work_schedule/worktime/workTimeMonth/worktimeDetail.vue')
        }
      ]
    },
    {
      path: '/work_schedule/sign',
      name: 'sign',
      component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/work_schedule/sign/sign.vue')
    },
    {
      path: '/work_schedule/leave',
      name: 'leave',
      component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/work_schedule/leave/leave.vue')
    },
    {
      path: '/sys_manage/user_manage',
      name: 'user_manage',
      component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/sys_manage/UserManage/UserManage.vue')
    },
    {
      path: '/sys_manage/role_manage',
      name: 'role_manage',
      component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/sys_manage/RoleManage/RoleManage.vue')
    },
    {
      path: '/sys_manage/operations',
      name: 'operations',
      component: () => import(/* webpackChunkName: "work_schedule" */ '@/views/sys_manage/operations/operations.vue')
    },
    {
      path: '/jobs_management',
      name: 'jobsManagement',
      component: () => import(/* webpackChunkName: "jobs_management" */ '@/views/basic-info/PostManage/JobsManagement.vue')
    },
    {
      path: '/worktime_rule',
      name: 'worktimeRule',
      component: () => import(/* webpackChunkName: "worktime_rule" */ '@/views/basic-info/workTimeRule/WorktimeRule.vue')
    },
    {
      path: '/data_dictionary',
      name: 'dataDictionary',
      component: () => import(/* webpackChunkName: "data_dictionary" */ '@/views/sys_manage/DataDictionary/DataDictionaryNew.vue')
    },
    {
      path: '/org_manager',
      name: 'orgManager',
      component: () => import(/* webpackChunkName: "worktime_rule" */ '@/views/basic-info/OrgManager.vue')
    },
    {
      path: '/ectocyst_org_manager',
      name: 'ectocystOrgManage',
      component: () => import('@/views/basic-info/ectocystOrgManager.vue')
    },
    {
      path: '/401',
      name: '401',
      component: () => import('@/components/forbid401.vue')
    },
    {
      path: '/noticeList',
      name: 'noticeList',
      component: () => import('@/views/basic-info/NoticeList/noticeList.vue')
    },
    {
      path: '/overtime',
      name: 'overtime',
      component: () => import('@/views/work_schedule/overtime/overtime.vue')
    },
    {
      path: '/businessTravel',
      name: 'businessTravel',
      component: () => import('@/views/work_schedule/businessTrip/businessTrip.vue')
    },
    {
      path: '/data_modification',
      name: 'dataModification',
      component: () => import('@/views/basic-info/data_modification/data.vue')
    },
    {
      path: '/claim',
      name: 'claim',
      component: () => import('@/views/settlement/reimbursement/reimbursement.vue')
    },
    {
      path: '/report/resume',
      name: 'resume',
      component: () => import('@/views/report_manage/resume.vue')
    },
    {
      path: '/report/budgetPlan',
      name: 'budgetPlan',
      component: () => import('@/views/report_manage/budgetPlan.vue')
    },
    {
      path: '/report/supplierResume',
      name: 'supplierResume',
      component: () => import('@/views/report_manage/supplierResume.vue')
    },
    {
      path: '/report/tmBankStatus',
      name: 'tmBankStatus',
      component: () => import('@/views/report_manage/manpower.vue')
    },
    {
      path: '/report/interviewResume',
      name: 'tmBankStatus',
      meta: {
        itemCode: 'interview_resume'
      },
      component: () => import('@/views/report_manage/index.vue')
    },
    {
      path: '/report/workTimeResume',
      name: 'tmBankStatus',
      meta: {
        itemCode: 'work_time_resume'
      },
      component: () => import('@/views/report_manage/index.vue')
    },
    {
      path: '/data_dictionary_new',
      name: 'data_dictionary_new',
      component: () => import('@/views/sys_manage/DataDictionary/DataDictionaryNew.vue')
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import('@/views/performance/performance.vue')
    },
    {
      path: '/scheduleRule',
      name: 'scheduleRule',
      component: () => import('@/views/work_schedule/scheduleRule/scheduleRule.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // debugger
  let token = ' '
  if (to.query.token) {
    token = to.query.token
    let url = to.fullPath.split('?')[0]
    let splitParmas = to.fullPath.split('?')[1]
    let parmasObj = qs.parse(splitParmas)
    delete parmasObj.token
    let path = url + '?' + qs.stringify(parmasObj)
    setToken(token)
    next(path)
  } else {
    // 新增缓存用户信息
    if (!Store.state.global.user) {
      Store.dispatch('loadUser').then(() => {
        next()
      })
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  // debugger
  let user = Store.state.global.user
  if (user && window.trackPageView) {
    window.trackPageView(to, from, {
      pageTitle: '', // 页面标题，选填
      userId: user.employeeNumber, // 用户工号,必填
      userName: user.name, // 用户名，必填
      sessionId: getToken() // sessionId，可以是用户登录token，必填
    })
  }
})
export default router
