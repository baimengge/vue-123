// 引用模板
import index from '../page/index'
import content from '../page/content'
// 配置路由
export default[
  {
	path: '/',
	component: index
  },
  {
    path: '/content',
	component: content
  }
]