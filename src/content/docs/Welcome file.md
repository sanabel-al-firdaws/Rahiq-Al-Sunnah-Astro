# مرحبًا بك في StackEdit+!

أهلاً! أنا ملف Markdown الأول في ** StackEdit+ ** . إذا كنت تريد التعرف على StackEdit+، يمكنك قراءتي. إذا كنت تريد اللعب مع Markdown، فيمكنك تعديله. بمجرد الانتهاء منك، يمكنك إنشاء ملفات جديدة عن طريق فتح ** مستكشف الملفات ** في قطاع الطيران البصري.


# الملفات

يقوم StackEdit+ بتخزين ملفاتك في متصفحك، مما يعني أن جميع ملفاتك يتم حفظها بشكل حي محلي محلي ** دون الاتصال بالإنترنت! **

## إنشاء الملفات والمجلدات

يمكن الوصول إلى المستكشفين باستخدام الزر البصري البصري للطيران. يمكنك إنشاء ملف جديد بالنقر فوق الزر ** ملف جديد ** في مستكشف الملفات. يمكنك أيضًا إنشاء نسخة بالنقر فوق زرزر ** مجلد جديد ** .

## التبديل إلى ملف السؤال

يتم عرض جميع ملفاتك ومجلداتك على شكل شجرة في مستكشف الملفات. يمكنك التبديل من واحد إلى آخر طريقة الضغط فوق ملف الشجرة.

## إعادة تسمية الملف

يمكنك إعادة تسمية الملف الحالي بالنقر فوق اسم الملف في شريط مكافحة أو بالنقر فوق الزر ** إعادة تسمية ** في مستكشف الملفات.

## احترف في الملفات

يمكنك البحث عن الملفات في مساحة العمل باستخدام الكلمات الأساسية من خلال الضغط على أيقونة ** البحث عن الملفات ** في File Explorer.

## حذف الملف

يمكنك حذف الملف الأصلي بالنقر فوق الزر ** إزالة ** في استكشاف الملفات. سيتم نقل الملف إلى المجلد ** وحدة المهمات ** وسيتم حذفه بعد 7 أيام من عدم وجوده.

## تصدير الملف

يمكنك تصدير الملف الحالي بالنقر ** التصدير إلى القرص ** في القائمة. يمكنك اختيار تصدير الملف إلى Markdown بشكل عادي، أو استخدام HTML باستخدام قالب Handlebars أو إضافة PDF.


# التزامن

تعد نروسات واحدة من أكبر ميزات StackEdit+. فهو يتعرف على أي ملف في مساحة العمل الخاصة بك مع الملفات الأخرى المخزنة في ** Google Drive ** و ** Dropbox ** وحسابات ** GitHub ** الخاصة بك . يتيح لك هذا الفرصة في الأجهزة الأخرى، والتعاون مع الأشخاص الذين يشاركون في الملف معهم، والاندماج بسهولة في كتابة الخلفية في سير عملك... تم تيمزمات كل دقيقة في، حيث يتم تنزيل مشاركة ودمجها وتحميلها.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with GitHub in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit+ can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit+ will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit+ makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit+ keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit+ extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczMjQ1MTAyMF19
-->