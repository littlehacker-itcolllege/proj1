from django.shortcuts import render
import time
from django.http.response import HttpResponse
# Create your views here.
x = 0
y = 0
hoge = 0
hoge2 = 'ゴブリンが現れた'
comment = ['hellooo','wold','こんにちは','こんばんは']
comment2=''
comment3=''
comment4=''




def stage(request):
    return render(request,'stage.html')

def story_html(request):
    return render(request,'story.html')
def game_html(request):
    return render(request,'game.html')
def head_html(request):
    return render(request,'head.html')







#storyのプログラム
def story_html(request):
    if y == 0:
        global y
        y += 1
        global comment1
        comment1 = 'hello'
    elif y == 1:
        y += 1
        global comment2
        comment2 = 'wolrd'
    elif y == 2:
        y += 1
        global comment3
        comment3 = 'ハロー'

    else:
        global comment4
        comment4 = 'ばいばい'
    d = {
        'comment1' : comment1,
        'comment2' : comment2,
        'comment3' : comment3,
        'comment4' : comment4,
    }
    return render(request, 'story.html',d)


#gameのプログラム
def game_html(request):
    if request.GET.get('attack'):
        if hoge < 2:
            global hoge
            hoge += 1
            global hoge2
            hoge2 = "ブリンを倒せ！"
        elif hoge >= 2:
            hoge2 = 'おめでとう！ゴブリンを倒した'
            hoge = 0
    d = {
        'attack' + str(hoge) : request.GET.get('attack'),
        'hoge' : hoge,
        'hoge2' : hoge2,
    }
    return render(request, 'game.html',d)
