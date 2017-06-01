Short notes on implementing Wistia Video uploader


During my experience with Angular JS, I have worked with Angular 1.4. That means that components functionality was unknown despite the fact that I am learning React and the logic about components it's familiar already.


Thus, I read a bit about components. I already knew that $scope is disappearing on Angular 2 and I was trying to avoid using it on the development of the app. However, as I needed a watcher to listen to 'fileuploaddone' event, I was sticked to use it. I googled for a way to avoid using it but I didn't succeed on the search.


As I had some spare time, I dedicated some time to the UI. The API password and all data is inside the component because I think that it is responsibility of the WistiaUploader component itself to gather all the information needed for the uploads.


Regarding the plugin, I can say that I spent some time looking around it, checking how was developed and my end feeling was that it's a bit complex regarding all the uploaders that are already developed for Angular and being used in the market right now.


On the console, there are two kind of errors thrown. One, regarding Wistia code and I omitted it. The second one is regarding the angular directive to manipulate the uploader box and I think more work can be done on top of it to wait for jQuery initialization of the components. However, I did not work more on it because I did not consider a priority as the functionality of the program was not affected.


To sum up, despite it was a short excercise, I found it really fruitful in order to read newer documentation on Angular and play around with Wistia API despite I already knew as I have worked with it before.