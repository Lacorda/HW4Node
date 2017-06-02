## 数据库：
#### 概念：按照数据结构来组织、存储和管理数据的仓库
#### 数据结构：计算机存储、组织数据的方式，如：
![Alt text](ds.jpg '数据结构图')

## 关系型数据库（Sql：MySql、sqlite、oracle） 与 非关系型数据库（NoSql：mongoDB）

### 非关系型数据库的优势：
##### 1. 性能
###### NOSQL是基于键值对的，可以想象成表中的主键和值的对应关系，而且不需要经过SQL层的解析，所以性能非常高。
##### 2. 可扩展性
###### 同样也是因为基于键值对，数据之间没有耦合性，所以非常容易水平扩展。

### 关系型数据库的优势：
##### 1. 复杂查询
###### 可以用SQL语句方便的在一个表以及多个表之间做非常复杂的数据查询。
##### 2. 事务支持
###### 使得对于安全性能很高的数据访问要求得以实现。

##### 对于这两类数据库，对方的优势就是自己的弱势，反之亦然。
<br />

### 数据库：mysql
<br />

### 图形界面数据库管理工具：Navicat for MySql
<br />

### node.js模块——sequelize：
###### 基于 promise 的 ORM 框架，它支持 PostgreSQL ，MySQL ， MariaDB , SQLite 和 MSSQL 等数据库，并拥有事务，关系，订阅,复制等特性。
###### [Sequelize](http://sequelize.readthedocs.io/en/latest/api/sequelize/?_blank)
###### [DataTypes](http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types?_blank)
###### [Model](http://sequelize.readthedocs.io/en/latest/api/model/?_blank)

