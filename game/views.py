from django.shortcuts import render
import time
from django.http.response import HttpResponse
# Create your views here.
def map(request):
    return render(request,'map.html')
def stage(request):
    return render(request,'1-1/stage1-1.html')
def story_html(request):
    return render(request,'1-1/story1-1.html')
def game_html(request):
    return render(request,'1-1/game1-1.html')
def head_html(request):
    return render(request,'1-1/head1-1.html')
def nextstory_html(request):
    return render(request,'1-1/nextstory1-1.html')

#stage1-2
def stage2(request):
    return render(request,'1-2/stage1-2.html')
def story_html2(request):
    return render(request,'1-2/story1-2.html')
def game_html2(request):
    return render(request,'1-2/game1-2.html')
def game_wepon(request):
    return render(request,'1-2/wepon.html')
def head_html2(request):
    return render(request,'1-2/head1-2.html')
def nextstory_html2(request):
    return render(request,'1-2/nextstory1-2.html')

#stage1-3
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

#stage1-4
def stage4(request):
    return render(request,'1-4/stage1-4.html')
def story_html4(request):
    return render(request,'1-4/story1-4.html')
def game_html4(request):
    return render(request,'1-4/game1-4.html')
def head_html4(request):
    return render(request,'1-4/head1-4.html')
def nextstory_html4(request):
    return render(request,'1-4/nextstory1-4.html')

#stage1-4
def stage5(request):
    return render(request,'2-1/stage2-1.html')
def story_html5(request):
    return render(request,'2-1/story2-1.html')
def game_html5(request):
    return render(request,'2-1/game2-1.html')
def head_html5(request):
    return render(request,'2-1/head2-1.html')
def nextstory_html5(request):
    return render(request,'2-1/nextstory2-1.html')

