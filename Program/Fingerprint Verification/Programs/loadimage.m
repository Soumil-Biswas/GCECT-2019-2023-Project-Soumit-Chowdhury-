function image1 = loadimage

global image1;
[impath, user_canceled] = imgetfile;
if user_canceled
    msgbox(sprintf('Cancelled by user!\nOperation could not be completed'),'error','error');
    return;
end
image1 = imread(impath);
