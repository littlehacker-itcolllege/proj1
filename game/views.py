from django.shortcuts import render
import time
from django.http.response import HttpResponse
# Create your views here.
def stage(request):
    return render(request,'stage.html')
def story_html(request):
    return render(request,'story.html')
def game_html(request):
    return render(request,'game.html')
def head_html(request):
    return render(request,'head.html')
