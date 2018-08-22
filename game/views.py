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
def head_html2(request):
    return render(request,'1-2/head1-2.html')
def nextstory_html2(request):
    return render(request,'1-2/nextstory1-2.html')

