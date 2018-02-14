# build-preElement
ソースコードを記述するpre要素の成形

## 概要
通常ソースコードの記述は
&lt;pre&gt;&lt;code&gt; ソースコード &lt;/pre&gt;&lt;/code&gt;のように記述するが、    
ソースコードはそのまま&lt;div&gt;&lt;/div&gt;のように書いてしまうと通常の要素として認識されてしまう。    
そのため&lt;は\&lt;、&gt;は\&gt;とかかなければならず、一手間加えなければならない。    
```
<pre><code>
	&lt;p&gt;ここに表示されます&lt;/p&gt;
</code></pre>
```
その手間をなくし、そのまま記述できるようにするライブラリー。
```
<pre><code>
	<p class="about-ttl">ここに表示されます</p>
</code></pre>
```
上記のようにhtmlを書くことができる。

## 使い方
- &lt;/body&gt;直前にjsファイルを読み込ませる
- cssファイルの読み込み or cssファイルの内容を自ファイルに転記

## 記述
pre要素にdata-title属性を記述して値に入れた物が左肩にラベルのように表記されます。
