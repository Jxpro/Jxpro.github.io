import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c,a as n,b as s,d as t,e as a}from"./app-07a77cc8.js";const o={},u=a('<h1 id="ros笔记" tabindex="-1"><a class="header-anchor" href="#ros笔记" aria-hidden="true">#</a> ROS笔记</h1><h2 id="一、软硬件版本" tabindex="-1"><a class="header-anchor" href="#一、软硬件版本" aria-hidden="true">#</a> 一、软硬件版本</h2><table><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">版本</th></tr></thead><tbody><tr><td style="text-align:center;">系统版本（uname -a）</td><td style="text-align:center;">Linux ubuntu 5.4.0-96-generic</td></tr><tr><td style="text-align:center;">rosdistro</td><td style="text-align:center;">melodic</td></tr><tr><td style="text-align:center;">rosversion</td><td style="text-align:center;">1.14.12</td></tr></tbody></table>',3),r={href:"https://www.bilibili.com/video/BV1zt411G7Vn",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="二、安装ros" tabindex="-1"><a class="header-anchor" href="#二、安装ros" aria-hidden="true">#</a> 二、安装ROS</h2><h3 id="_2-1-配置软件仓库" tabindex="-1"><a class="header-anchor" href="#_2-1-配置软件仓库" aria-hidden="true">#</a> 2.1 配置软件仓库</h3><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2022/01/2022-01-28-194521.png" alt="image-20220128194520014" tabindex="0" loading="lazy"><figcaption>image-20220128194520014</figcaption></figure><h3 id="_2-2-添加ros软件源" tabindex="-1"><a class="header-anchor" href="#_2-2-添加ros软件源" aria-hidden="true">#</a> 2.2 添加ROS软件源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;echo &quot;deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main&quot; &gt; /etc/apt/sources.list.d/ros-latest.list&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-添加密钥" tabindex="-1"><a class="header-anchor" href="#_2-3-添加密钥" aria-hidden="true">#</a> 2.3 添加密钥</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-安装" tabindex="-1"><a class="header-anchor" href="#_2-4-安装" aria-hidden="true">#</a> 2.4 安装</h3><p>更新软件索引：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装<code>Desktop-Full</code>版本（约五到十分钟）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> ros-melodic-desktop-full
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-5-设置环境变量" tabindex="-1"><a class="header-anchor" href="#_2-5-设置环境变量" aria-hidden="true">#</a> 2.5 设置环境变量</h3><p>修改<code>.bashrc</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;source /opt/ros/melodic/setup.bash&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启终端或使用<code>source</code>命令重新加载：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-7-安装相关依赖" tabindex="-1"><a class="header-anchor" href="#_2-7-安装相关依赖" aria-hidden="true">#</a> 2.7 安装相关依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-8-初始化rosdep" tabindex="-1"><a class="header-anchor" href="#_2-8-初始化rosdep" aria-hidden="true">#</a> 2.8 初始化rosdep</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rosdep init
rosdep update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、运行海龟测试用例" tabindex="-1"><a class="header-anchor" href="#三、运行海龟测试用例" aria-hidden="true">#</a> 三、运行海龟测试用例</h2><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2022/01/2022-01-28-195945.png" alt="image-20220128195943951" tabindex="0" loading="lazy"><figcaption>image-20220128195943951</figcaption></figure><p>启动以后：</p><ol><li>可通过方向键控制海龟移动</li><li>如下通过topic消息移动</li></ol><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2022/01/2022-01-28-202300.png" alt="image-20220128202259525" tabindex="0" loading="lazy"><figcaption>image-20220128202259525</figcaption></figure><h2 id="四、创建工作空间与功能包" tabindex="-1"><a class="header-anchor" href="#四、创建工作空间与功能包" aria-hidden="true">#</a> 四、创建工作空间与功能包</h2><h3 id="_4-1-创建并初始化工作区" tabindex="-1"><a class="header-anchor" href="#_4-1-创建并初始化工作区" aria-hidden="true">#</a> 4.1 创建并初始化工作区</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/catkin_ws/src
<span class="token builtin class-name">cd</span> catkin_ ws/src
catkin_init_workspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-编译工作空间-可为空" tabindex="-1"><a class="header-anchor" href="#_4-2-编译工作空间-可为空" aria-hidden="true">#</a> 4.2 编译工作空间（可为空）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> catkin_ws/
catkin_make         <span class="token comment">#不产生install文件夹</span>
catkin_make <span class="token function">install</span> <span class="token comment">#产生install文件夹</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-设置环境变量" tabindex="-1"><a class="header-anchor" href="#_4-3-设置环境变量" aria-hidden="true">#</a> 4.3 设置环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> devel/setup.bash

<span class="token builtin class-name">echo</span> <span class="token variable">$ROS_PACKAGE_PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-创建功能包-开发的最小模块单位" tabindex="-1"><a class="header-anchor" href="#_4-4-创建功能包-开发的最小模块单位" aria-hidden="true">#</a> 4.4 创建功能包（开发的最小模块单位）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/catkin_ws/src
catkin_create_pkg test_pkg std_msgs rospy roscpp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-编译功能包" tabindex="-1"><a class="header-anchor" href="#_4-5-编译功能包" aria-hidden="true">#</a> 4.5 编译功能包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/catkin_ws
catkin_make
<span class="token builtin class-name">source</span> ~/catkin_ws/devel/setup.bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>同一个工作空间下,不允许存在同名功能包；但不同工作空间下,允许存在同名功能包</p></blockquote><h2 id="五、ros的两种通信机制" tabindex="-1"><a class="header-anchor" href="#五、ros的两种通信机制" aria-hidden="true">#</a> 五、ROS的两种通信机制</h2><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2022/01/2022-01-29-232605.png" alt="image-20220129232603881" tabindex="0" loading="lazy"><figcaption>image-20220129232603881</figcaption></figure><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2022/01/2022-01-29-232630.png" alt="image-20220129232628750" tabindex="0" loading="lazy"><figcaption>image-20220129232628750</figcaption></figure><h2 id="六、topic控制海龟示例" tabindex="-1"><a class="header-anchor" href="#六、topic控制海龟示例" aria-hidden="true">#</a> 六、topic控制海龟示例</h2><p>创建功能包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ catkin_create_pkg learning_topic roscpp rospy std_msgs geometry_msgs turtlesim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="c-实现" tabindex="-1"><a class="header-anchor" href="#c-实现" aria-hidden="true">#</a> C++实现</h3><p>代码：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>/**
 * 该例程将发布turtle1/cmd_vel话题，消息类型geometry_msgs::Twist
 */

#include &lt;ros/ros.h&gt;
#include &lt;geometry_msgs/Twist.h&gt;

int main(int argc, char **argv)
{
	// ROS节点初始化
	ros::init(argc, argv, &quot;velocity_publisher&quot;);

	// 创建节点句柄
	ros::NodeHandle n;

	// 创建一个Publisher，发布名为/turtle1/cmd_vel的topic，消息类型为geometry_msgs::Twist，队列长度10
	ros::Publisher turtle_vel_pub = n.advertise&lt;geometry_msgs::Twist&gt;(&quot;/turtle1/cmd_vel&quot;, 10);

	// 设置循环的频率
	ros::Rate loop_rate(10);

	int count = 0;
	while (ros::ok())
	{
	    // 初始化geometry_msgs::Twist类型的消息
		geometry_msgs::Twist vel_msg;
		vel_msg.linear.x = 0.5;
		vel_msg.angular.z = 0.2;

	    // 发布消息
		turtle_vel_pub.publish(vel_msg);
		ROS_INFO(&quot;Publsh turtle velocity command[%0.2f m/s, %0.2f rad/s]&quot;,
				vel_msg.linear.x, vel_msg.angular.z);

	    // 按照循环频率延时
	    loop_rate.sleep();
	}

	return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>CMakeLists.txt</code>文件，加入以下内容：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>add_executable(velocity_publisher src/velocity_publisher.cpp)
target_link_libraries(velocity_publisher \${catkin_LIBRARIES})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>learning_topic</code>下执行<code>catkin_make</code>命令，编译完成后执行<code>source devel/setup.bash</code>加入环境变量；</p><p>启动节点：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ roscore
$ rosrun turtlesim turtlesim_node
$ rosrun learning_topic velocity_publisher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2022/01/2022-01-28-221543.png" alt="image-20220128221542372" tabindex="0" loading="lazy"><figcaption>image-20220128221542372</figcaption></figure><h3 id="python实现" tabindex="-1"><a class="header-anchor" href="#python实现" aria-hidden="true">#</a> Python实现</h3><p>代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token comment"># 该例程将发布turtle1/cmd_vel话题，消息类型geometry_msgs::Twist</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> geometry_msgs<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Twist

<span class="token keyword">def</span> <span class="token function">velocity_publisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># ROS节点初始化</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;velocity_publisher&#39;</span><span class="token punctuation">,</span> anonymous<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

	<span class="token comment"># 创建一个Publisher，发布名为/turtle1/cmd_vel的topic，消息类型为geometry_msgs::Twist，队列长度10</span>
    turtle_vel_pub <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Publisher<span class="token punctuation">(</span><span class="token string">&#39;/turtle1/cmd_vel&#39;</span><span class="token punctuation">,</span> Twist<span class="token punctuation">,</span> queue_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>

	<span class="token comment">#设置循环的频率</span>
    rate <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Rate<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token keyword">not</span> rospy<span class="token punctuation">.</span>is_shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># 初始化geometry_msgs::Twist类型的消息</span>
        vel_msg <span class="token operator">=</span> Twist<span class="token punctuation">(</span><span class="token punctuation">)</span>
        vel_msg<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0.5</span>
        vel_msg<span class="token punctuation">.</span>angular<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0.2</span>

		<span class="token comment"># 发布消息</span>
        turtle_vel_pub<span class="token punctuation">.</span>publish<span class="token punctuation">(</span>vel_msg<span class="token punctuation">)</span>
    	rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&quot;Publsh turtle velocity command[%0.2f m/s, %0.2f rad/s]&quot;</span><span class="token punctuation">,</span>
				vel_msg<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>x<span class="token punctuation">,</span> vel_msg<span class="token punctuation">.</span>angular<span class="token punctuation">.</span>z<span class="token punctuation">)</span>

		<span class="token comment"># 按照循环频率延时</span>
        rate<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        velocity_publisher<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> rospy<span class="token punctuation">.</span>ROSInterruptException<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（<code>Python2.7</code>）执行指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python locity_publisher.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>报错：</p><blockquote><p>ImportError: No module named yaml</p><p>ImportError: No module named rospkg</p><p>......</p></blockquote><p>执行以下指令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> python-rosinstall
<span class="token function">sudo</span> pip <span class="token function">install</span> <span class="token parameter variable">-U</span> rosinstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、自定义topic消息格式" tabindex="-1"><a class="header-anchor" href="#七、自定义topic消息格式" aria-hidden="true">#</a> 七、自定义topic消息格式</h2><p>先在对应功能包下，新建msg文件夹，文件名<strong>不可随意更改！！！</strong></p><p>然后创建对应的<code>.msg</code>文件，格式如下：</p><blockquote><p>上面指定了变量，下面指定了常量</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>string name
uint8  age
uint8  sex

uint8 unknown = 0
uint8 male    = 1
uint8 female  = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在<code>package.xml</code>中添加功能包依赖：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build_depend</span><span class="token punctuation">&gt;</span></span>message_generation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build_depend</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exec_depend</span><span class="token punctuation">&gt;</span></span>message_runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exec_depend</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>CMakeLists.txt</code>对应位置（见注释）添加编译选项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>find_package(catkin REQUIRED COMPONENTS
  ...
  message_generation
)

add_message_files(
  FILES
  Person.msg
)

generate_messages(
  DEPENDENCIES
  std_msgs
)

catkin_package(
  ...
  CATKIN_DEPENDS geometry_msgs roscpp rospy std_msgs turtlesim message_runtime
  ...
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后回到工作区根目录执行<code>catkin_make</code>，即可生成对应文件：</p><ul><li><code>.h</code>文件位于<code>ws_name/devel/include/pkg_name/</code></li><li><code>.py</code>文件位于<code>ws_name/devel/lib/python2.7/dist-packages/pkg_name/msg</code></li></ul><h2 id="八、service控制海龟示例" tabindex="-1"><a class="header-anchor" href="#八、service控制海龟示例" aria-hidden="true">#</a> 八、service控制海龟示例</h2><p>创建功能包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ catkin_create_pkg learning_service roscpp rospy std_msgs geometry_msgs turtlesim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="python实现-1" tabindex="-1"><a class="header-anchor" href="#python实现-1" aria-hidden="true">#</a> Python实现</h3><p>代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token comment"># 该例程将请求/spawn服务，服务数据类型turtlesim::Spawn</span>

<span class="token keyword">import</span> sys
<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> turtlesim<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Spawn

<span class="token keyword">def</span> <span class="token function">turtle_spawn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># ROS节点初始化</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;turtle_spawn&#39;</span><span class="token punctuation">)</span>

	<span class="token comment"># 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service</span>
    rospy<span class="token punctuation">.</span>wait_for_service<span class="token punctuation">(</span><span class="token string">&#39;/spawn&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        add_turtle <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;/spawn&#39;</span><span class="token punctuation">,</span> Spawn<span class="token punctuation">)</span>

		<span class="token comment"># 请求服务调用，输入请求数据</span>
        response <span class="token operator">=</span> add_turtle<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&quot;turtle2&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span>name
    <span class="token keyword">except</span> rospy<span class="token punctuation">.</span>ServiceException<span class="token punctuation">,</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">&quot;Service call failed: %s&quot;</span><span class="token operator">%</span>e

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
	<span class="token comment">#服务调用并显示调用结果</span>
    <span class="token keyword">print</span> <span class="token string">&quot;Spwan turtle successfully [name:%s]&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>turtle_spawn<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、分布式多机通信" tabindex="-1"><a class="header-anchor" href="#九、分布式多机通信" aria-hidden="true">#</a> 九、分布式多机通信</h2>`,81),v=n("strong",null,"暂未实践",-1),m={href:"https://blog.csdn.net/hehedadaq/article/details/82898307",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="十、示例代码-python" tabindex="-1"><a class="header-anchor" href="#十、示例代码-python" aria-hidden="true">#</a> 十、示例代码（Python）</h2><h3 id="velocity-publisher-py" tabindex="-1"><a class="header-anchor" href="#velocity-publisher-py" aria-hidden="true">#</a> velocity_publisher.py</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token comment">########################################################################</span>
<span class="token comment">####          Copyright 2020 GuYueHome (www.guyuehome.com).          ###</span>
<span class="token comment">########################################################################</span>

<span class="token comment"># 该例程将发布turtle1/cmd_vel话题，消息类型geometry_msgs::Twist</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> geometry_msgs<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Twist

<span class="token keyword">def</span> <span class="token function">velocity_publisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># ROS节点初始化</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;velocity_publisher&#39;</span><span class="token punctuation">,</span> anonymous<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

	<span class="token comment"># 创建一个Publisher，发布名为/turtle1/cmd_vel的topic，消息类型为geometry_msgs::Twist，队列长度10</span>
    turtle_vel_pub <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Publisher<span class="token punctuation">(</span><span class="token string">&#39;/turtle1/cmd_vel&#39;</span><span class="token punctuation">,</span> Twist<span class="token punctuation">,</span> queue_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>

	<span class="token comment">#设置循环的频率</span>
    rate <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Rate<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token keyword">not</span> rospy<span class="token punctuation">.</span>is_shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># 初始化geometry_msgs::Twist类型的消息</span>
        vel_msg <span class="token operator">=</span> Twist<span class="token punctuation">(</span><span class="token punctuation">)</span>
        vel_msg<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0.5</span>
        vel_msg<span class="token punctuation">.</span>angular<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0.2</span>

		<span class="token comment"># 发布消息</span>
        turtle_vel_pub<span class="token punctuation">.</span>publish<span class="token punctuation">(</span>vel_msg<span class="token punctuation">)</span>
    	rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&quot;Publsh turtle velocity command[%0.2f m/s, %0.2f rad/s]&quot;</span><span class="token punctuation">,</span>
				vel_msg<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>x<span class="token punctuation">,</span> vel_msg<span class="token punctuation">.</span>angular<span class="token punctuation">.</span>z<span class="token punctuation">)</span>

		<span class="token comment"># 按照循环频率延时</span>
        rate<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        velocity_publisher<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> rospy<span class="token punctuation">.</span>ROSInterruptException<span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pose-subscriber-py" tabindex="-1"><a class="header-anchor" href="#pose-subscriber-py" aria-hidden="true">#</a> pose_subscriber.py：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token comment">########################################################################</span>
<span class="token comment">####          Copyright 2020 GuYueHome (www.guyuehome.com).          ###</span>
<span class="token comment">########################################################################</span>

<span class="token comment"># 该例程将订阅/turtle1/pose话题，消息类型turtlesim::Pose</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> turtlesim<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Pose

<span class="token keyword">def</span> <span class="token function">poseCallback</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&quot;Turtle pose: x:%0.6f, y:%0.6f&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>x<span class="token punctuation">,</span> msg<span class="token punctuation">.</span>y<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">pose_subscriber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># ROS节点初始化</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;pose_subscriber&#39;</span><span class="token punctuation">,</span> anonymous<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

	<span class="token comment"># 创建一个Subscriber，订阅名为/turtle1/pose的topic，注册回调函数poseCallback</span>
    rospy<span class="token punctuation">.</span>Subscriber<span class="token punctuation">(</span><span class="token string">&quot;/turtle1/pose&quot;</span><span class="token punctuation">,</span> Pose<span class="token punctuation">,</span> poseCallback<span class="token punctuation">)</span>

	<span class="token comment"># 循环等待回调函数</span>
    rospy<span class="token punctuation">.</span>spin<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    pose_subscriber<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="turtle-spawn-client-py" tabindex="-1"><a class="header-anchor" href="#turtle-spawn-client-py" aria-hidden="true">#</a> turtle_spawn_client.py：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token comment">########################################################################</span>
<span class="token comment">####          Copyright 2020 GuYueHome (www.guyuehome.com).          ###</span>
<span class="token comment">########################################################################</span>

<span class="token comment"># 该例程将请求/spawn服务，服务数据类型turtlesim::Spawn</span>

<span class="token keyword">import</span> sys
<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> turtlesim<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Spawn

<span class="token keyword">def</span> <span class="token function">turtle_spawn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># ROS节点初始化</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;turtle_spawn&#39;</span><span class="token punctuation">)</span>

	<span class="token comment"># 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service</span>
    rospy<span class="token punctuation">.</span>wait_for_service<span class="token punctuation">(</span><span class="token string">&#39;/spawn&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        add_turtle <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;/spawn&#39;</span><span class="token punctuation">,</span> Spawn<span class="token punctuation">)</span>

		<span class="token comment"># 请求服务调用，输入请求数据</span>
        response <span class="token operator">=</span> add_turtle<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">2.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token string">&quot;turtle2&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span>name
    <span class="token keyword">except</span> rospy<span class="token punctuation">.</span>ServiceException<span class="token punctuation">,</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">&quot;Service call failed: %s&quot;</span><span class="token operator">%</span>e

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
	<span class="token comment">#服务调用并显示调用结果</span>
    <span class="token keyword">print</span> <span class="token string">&quot;Spwan turtle successfully [name:%s]&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>turtle_spawn<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="turtle-command-server-py" tabindex="-1"><a class="header-anchor" href="#turtle-command-server-py" aria-hidden="true">#</a> turtle_command_server.py：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token comment">########################################################################</span>
<span class="token comment">####          Copyright 2020 GuYueHome (www.guyuehome.com).          ###</span>
<span class="token comment">########################################################################</span>

<span class="token comment"># 该例程将执行/turtle_command服务，服务数据类型std_srvs/Trigger</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">import</span> thread<span class="token punctuation">,</span>time
<span class="token keyword">from</span> geometry_msgs<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Twist
<span class="token keyword">from</span> std_srvs<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Trigger<span class="token punctuation">,</span> TriggerResponse

pubCommand <span class="token operator">=</span> <span class="token boolean">False</span><span class="token punctuation">;</span>
turtle_vel_pub <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Publisher<span class="token punctuation">(</span><span class="token string">&#39;/turtle1/cmd_vel&#39;</span><span class="token punctuation">,</span> Twist<span class="token punctuation">,</span> queue_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">command_thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
		<span class="token keyword">if</span> pubCommand<span class="token punctuation">:</span>
			vel_msg <span class="token operator">=</span> Twist<span class="token punctuation">(</span><span class="token punctuation">)</span>
			vel_msg<span class="token punctuation">.</span>linear<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0.5</span>
			vel_msg<span class="token punctuation">.</span>angular<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0.2</span>
			turtle_vel_pub<span class="token punctuation">.</span>publish<span class="token punctuation">(</span>vel_msg<span class="token punctuation">)</span>

		time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">commandCallback</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">global</span> pubCommand
	pubCommand <span class="token operator">=</span> <span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token operator">-</span>pubCommand<span class="token punctuation">)</span>

	<span class="token comment"># 显示请求数据</span>
	rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&quot;Publish turtle velocity command![%d]&quot;</span><span class="token punctuation">,</span> pubCommand<span class="token punctuation">)</span>

	<span class="token comment"># 反馈数据</span>
	<span class="token keyword">return</span> TriggerResponse<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Change turtle command state!&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">turtle_command_server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># ROS节点初始化</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;turtle_command_server&#39;</span><span class="token punctuation">)</span>

	<span class="token comment"># 创建一个名为/turtle_command的server，注册回调函数commandCallback</span>
    s <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Service<span class="token punctuation">(</span><span class="token string">&#39;/turtle_command&#39;</span><span class="token punctuation">,</span> Trigger<span class="token punctuation">,</span> commandCallback<span class="token punctuation">)</span>

	<span class="token comment"># 循环等待回调函数</span>
    <span class="token keyword">print</span> <span class="token string">&quot;Ready to receive turtle command.&quot;</span>

    thread<span class="token punctuation">.</span>start_new_thread<span class="token punctuation">(</span>command_thread<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>spin<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    turtle_command_server<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parameter-config-py" tabindex="-1"><a class="header-anchor" href="#parameter-config-py" aria-hidden="true">#</a> parameter_config.py</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>

<span class="token comment">########################################################################</span>
<span class="token comment">####          Copyright 2020 GuYueHome (www.guyuehome.com).          ###</span>
<span class="token comment">########################################################################</span>

<span class="token comment"># 该例程设置/读取海龟例程中的参数</span>

<span class="token keyword">import</span> sys
<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> std_srvs<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Empty

<span class="token keyword">def</span> <span class="token function">parameter_config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># ROS节点初始化</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;parameter_config&#39;</span><span class="token punctuation">,</span> anonymous<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

	<span class="token comment"># 读取背景颜色参数</span>
    red   <span class="token operator">=</span> rospy<span class="token punctuation">.</span>get_param<span class="token punctuation">(</span><span class="token string">&#39;/background_r&#39;</span><span class="token punctuation">)</span>
    green <span class="token operator">=</span> rospy<span class="token punctuation">.</span>get_param<span class="token punctuation">(</span><span class="token string">&#39;/background_g&#39;</span><span class="token punctuation">)</span>
    blue  <span class="token operator">=</span> rospy<span class="token punctuation">.</span>get_param<span class="token punctuation">(</span><span class="token string">&#39;/background_b&#39;</span><span class="token punctuation">)</span>

    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&quot;Get Backgroud Color[%d, %d, %d]&quot;</span><span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">)</span>

	<span class="token comment"># 设置背景颜色参数</span>
    rospy<span class="token punctuation">.</span>set_param<span class="token punctuation">(</span><span class="token string">&quot;/background_r&quot;</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rospy<span class="token punctuation">.</span>set_param<span class="token punctuation">(</span><span class="token string">&quot;/background_g&quot;</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rospy<span class="token punctuation">.</span>set_param<span class="token punctuation">(</span><span class="token string">&quot;/background_b&quot;</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&quot;Set Backgroud Color[255, 255, 255]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment"># 读取背景颜色参数</span>
    red   <span class="token operator">=</span> rospy<span class="token punctuation">.</span>get_param<span class="token punctuation">(</span><span class="token string">&#39;/background_r&#39;</span><span class="token punctuation">)</span>
    green <span class="token operator">=</span> rospy<span class="token punctuation">.</span>get_param<span class="token punctuation">(</span><span class="token string">&#39;/background_g&#39;</span><span class="token punctuation">)</span>
    blue  <span class="token operator">=</span> rospy<span class="token punctuation">.</span>get_param<span class="token punctuation">(</span><span class="token string">&#39;/background_b&#39;</span><span class="token punctuation">)</span>

    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&quot;Get Backgroud Color[%d, %d, %d]&quot;</span><span class="token punctuation">,</span> red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">)</span>

	<span class="token comment"># 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service</span>
    rospy<span class="token punctuation">.</span>wait_for_service<span class="token punctuation">(</span><span class="token string">&#39;/clear&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        clear_background <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;/clear&#39;</span><span class="token punctuation">,</span> Empty<span class="token punctuation">)</span>

		<span class="token comment"># 请求服务调用，输入请求数据</span>
        response <span class="token operator">=</span> clear_background<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> response
    <span class="token keyword">except</span> rospy<span class="token punctuation">.</span>ServiceException<span class="token punctuation">,</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span> <span class="token string">&quot;Service call failed: %s&quot;</span><span class="token operator">%</span>e

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    parameter_config<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(g,h){const e=p("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[s("参考学习视频："),n("a",r,[s("古月·ROS入门21讲"),t(e)])]),d,n("p",null,[v,s("，最全参考博客："),n("a",m,[s("ROS分布式多机通信完整教程"),t(e)])]),k])}const w=i(o,[["render",b],["__file","ROS.html.vue"]]);export{w as default};
