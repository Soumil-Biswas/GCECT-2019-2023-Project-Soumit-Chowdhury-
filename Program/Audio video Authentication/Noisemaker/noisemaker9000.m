[img,impath] = uigetfile( ...
{'*.*',  'All Files (*.*)'});

a = imread(fullfile(impath,img));

W=inputdlg('Add Noise Precentage (%): ');
W=str2double(W);
noise = W ./ 100;

b = imnoise(a,'salt & pepper', noise);
%imshow(b);

g=inputdlg('Save File Name (and .format): ');
g=char(g);

%f=inputdlg('Add File Format: ');
%f=char(f);

s= strcat(img, g);

imwrite(b, s);