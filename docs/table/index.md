---
layout: default
---

<h1>表格 Table</h1>

<table class="ui-table">
    <thead>
    <tr>
        <th width="5%"></th>
        <th width="23%">产品名称</th>
        <th width="12%">推荐等级</th>
        <th width="15%">分类 <i class="fa fa-navicon"></i></th>
        <th width="15%">品牌 <i class="fa fa-navicon"></i></th>
        <th width="15%">标签 <i class="fa fa-filter"></i></th>
        <th width="15%">操作</th>
    </tr>
    </thead>
    <tbody>
    {% for i in (1..5) %}
    <tr>
        <td></td>
        <td>江南数控</td>
        <td>1级</td>
        <td>立式加工中心</td>
        <td>江南数控</td>
        <td>精密</td>
        <td>
            <a href="#" class="ft-gray mr-5"><i class="fa fa-eye"></i></a>
            <a href="#" class="ft-gray mr-5"><i class="fa fa-edit"></i></a>
            <a href="#" class="ft-gray"><i class="fa fa-ellipsis-h"></i></a>
        </td>
    </tr>
    {% endfor %}
    </tbody>
</table>

```html
<table class="ui-table">
    <thead>
    <tr>
        <th width="5%"></th>
        <th width="23%">产品名称</th>
        <th width="12%">推荐等级</th>
        <th width="15%">分类 <i class="fa fa-navicon"></i></th>
        <th width="15%">品牌 <i class="fa fa-navicon"></i></th>
        <th width="15%">标签 <i class="fa fa-filter"></i></th>
        <th width="15%">操作</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td></td>
        <td>江南数控</td>
        <td>1级</td>
        <td>立式加工中心</td>
        <td>江南数控</td>
        <td>精密</td>
        <td>
            <a href="#" class="ft-gray mr-5"><i class="fa fa-eye"></i></a>
            <a href="#" class="ft-gray mr-5"><i class="fa fa-edit"></i></a>
            <a href="#" class="ft-gray"><i class="fa fa-ellipsis-h"></i></a>
        </td>
    </tr>
    </tbody>
</table>
```