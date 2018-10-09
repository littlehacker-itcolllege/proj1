from django.shortcuts import render
import time
from django.http.response import HttpResponse
# Create your views here.
def map(request):
    return render(request,'map.html')

def stage1_1(request):
    return render(request,'1-1/stage1-1.html')
def story_html1_1(request):
    return render(request,'1-1/story1-1.html')
def game_html1_1(request):
    return render(request,'1-1/game1-1.html')
def head_html1_1(request):
    return render(request,'1-1/head1-1.html')
def nextstory_html1_1(request):
    return render(request,'1-1/nextstory1-1.html')
#stage1_2
def stage1_2(request):
    return render(request,'1-2/stage1-2.html')

#stage1-2
def stage2(request):
    return render(request,'1-2/stage1-2.html')
def story_html1_2(request):
    return render(request,'1-2/story1-2.html')
def game_html1_2(request):
    return render(request,'1-2/game1-2.html')
def head_html1_2(request):
    return render(request,'1-2/head1-2.html')
def nextstory_html1_2(request):
    return render(request,'1-2/nextstory1-2.html')

def stage4_1(request):
    return render(request,'4-1/stage4-1.html')
def story_html4_1(request):
    return render(request,'4-1/story4-1.html')
def game_html4_1(request):
    return render(request,'4-1/game4-1.html')
def head_html4_1(request):
    return render(request,'4-1/head4-1.html')
def nextstory_html4_1(request):
    return render(request,'4-1/nextstory4-1.html')
def see_html4_1(request):
    return render(request,'4-1/see4-1.html')
def input_html4_1(request):
    return render(request,'4-1/input4-1.html')

#stage1-2
def stage3(request):
    return render(request,'1-3/stage1-3.html')
def story_html3(request):
    return render(request,'1-3/story1-3.html')
def game_html3(request):
    return render(request,'1-3/game1-3.html')
def head_html3(request):
    return render(request,'1-3/head1-3.html')
def nextstory_html3(request):
    return render(request,'1-3/nextstory1-3.html')

