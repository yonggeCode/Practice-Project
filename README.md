# Element-UI 练习记录

## 栅格

> el-row 表示一行

        默认属性：
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
> el-col 表示一列

        默认属性：
        float: left;<br>
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
## Row Attributes
- gutter 栅栏间隔（左右padding平分该值 单位px）
> 如： gutter="20"  即左右padding各10
- type 布局模式，可选 flex(需要配合justify/align)
>type:"flex"
- justify
>   flex 布局下的水平排列方式
- align
>   flex 布局下的垂直排列方式
- tag	自定义元素标签
> 默认div

## Col Attributes 
- span 
> 将每列按比例划分（总24份）
- offset	
>栅格左侧的间隔格数	(默认值0)

> 相对于整个栅格向右移动
- push	
>栅格向右移动格数	(默认值0)

> 相对于自身向右移动（不对后面的栅格有影响）
- pull	
>栅格向左移动格数	(默认值0)

> 相对于自身向左移动（不对后面的栅格有影响）
- xs <768px
>	 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	
- sm ≥768px 
> 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})
- md ≥992px 
>响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	
- lg ≥1200px 
>响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})
- xl ≥1920px 
>响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})
- tag	自定义元素标签
> 默认div

## 容器
1. el-container：
>外层容器。当子元素中包含 el-header 或 el-footer 时，全部子元素会垂直上下排列，否则会水平左右排列。

2. el-header：顶栏容器。

3. el-aside：侧边栏容器。

4. el-main：主要区域容器。

5. el-footer：底栏容器。
## 图标
有个el-icon--righclass类 == margin-left：5px
## 按钮 

- size	尺寸	
- type	类型	
- plain	是否朴素按钮	
- round	是否圆角按钮	
- circle	是否圆形按钮	
- loading	是否加载中状态	
- disabled	是否禁用状态	
- icon	图标类名	
- autofocus	是否默认聚焦	
- native-type	原生 type 属性	

## 下划线

- type	类型	（颜色）
- underline	是否下划线	
- disabled	是否禁用状态	
- href	原生 href 属性	
- icon	图标类名	