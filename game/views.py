from django.shortcuts import render
import time
from django.http.response import HttpResponse
# Create your views here.
def map(request):
    return render(request,'map.html')
def opening(request):
    return render(request,'opening/opening.html')

#stage1-1
def stage1_1(request):
    return render(request,'1-1/stage1-1.html')
def story1_1(request):
    return render(request,'1-1/story1-1.html')
def game1_1(request):
    return render(request,'1-1/game1-1.html')
def head1_1(request):
    return render(request,'1-1/head1-1.html')
def nextstory1_1(request):
    return render(request,'1-1/nextstory1-1.html')

#stage1_2
def stage1_2(request):
    return render(request,'1-2/stage1-2.html')
def story1_2(request):
    return render(request,'1-2/story1-2.html')
def game1_2(request):
    return render(request,'1-2/game1-2.html')
def game_wepon(request):
    return render(request,'1-2/wepon.html')
def head1_2(request):
    return render(request,'1-2/head1-2.html')
def nextstory1_2(request):
    return render(request,'1-2/nextstory1-2.html')

#stage1-3
def stage1_3(request):
    return render(request,'1-3/stage1-3.html')
def story1_3(request):
    return render(request,'1-3/story1-3.html')
def game1_3(request):
    return render(request,'1-3/game1-3.html')
def head1_3(request):
    return render(request,'1-3/head1-3.html')
def nextstory1_3(request):
    return render(request,'1-3/nextstory1-3.html')

#stage1-4
def stage1_4(request):
    return render(request,'1-4/stage1-4.html')
def story1_4(request):
    return render(request,'1-4/story1-4.html')
def game1_4(request):
    return render(request,'1-4/game1-4.html')
def head1_4(request):
    return render(request,'1-4/head1-4.html')
def nextstory1_4(request):
    return render(request,'1-4/nextstory1-4.html')

#stage2-1
def stage2_1(request):
    return render(request,'2-1/stage2-1.html')
def story2_1(request):
    return render(request,'2-1/story2-1.html')
def game2_1(request):
    return render(request,'2-1/game2-1.html')
def head2_1(request):
    return render(request,'2-1/head2-1.html')
def nextstory2_1(request):
    return render(request,'2-1/nextstory2-1.html')

#stage2-2
def stage2_2(request):
    return render(request,'2-2/stage2-2.html')
def story2_2(request):
    return render(request,'2-2/story2-2.html')
def game2_2(request):
    return render(request,'2-2/game2-2.html')
def head2_2(request):
    return render(request,'2-2/head2-2.html')
def nextstory2_2(request):
    return render(request,'2-2/nextstory2-2.html')

#stage2-3
def stage2_3(request):
    return render(request,'2-3/stage2-3.html')
def story2_3(request):
    return render(request,'2-3/story2-3.html')
def game2_3(request):
    return render(request,'2-3/game2-3.html')
def head2_3(request):
    return render(request,'2-3/head2-3.html')
def nextstory2_3(request):
    return render(request,'2-3/nextstory2-3.html')

#stage3-1
def stage3_1(request):
    return render(request,'3-1/stage3-1.html')
def story3_1(request):
    return render(request,'3-1/story3-1.html')
def game3_1(request):
    return render(request,'3-1/game3-1.html')
def head3_1(request):
    return render(request,'3-1/head3-1.html')
def nextstory3_1(request):
    return render(request,'3-1/nextstory3-1.html')
def gameover3_1(request):
    return render(request,'3-1/gameover3-1.html')

#stage3-2
def stage3_2(request):
    return render(request,'3-2/stage3-2.html')
def story3_2(request):
    return render(request,'3-2/story3-2.html')
def game3_2(request):
    return render(request,'3-2/game3-2.html')
def head3_2(request):
    return render(request,'3-2/head3-2.html')
def nextstory3_2(request):
    return render(request,'3-2/nextstory3-2.html')
def gameover3_2(request):
    return render(request,'3-2/gameover3-2.html')

#stage3-3
def stage3_3(request):
    return render(request,'3-3/stage3-3.html')
def story3_3(request):
    return render(request,'3-3/story3-3.html')
def game3_3(request):
    return render(request,'3-3/game3-3.html')
def head3_3(request):
    return render(request,'3-3/head3-3.html')
def nextstory3_3(request):
    return render(request,'3-3/nextstory3-3.html')
def gameover3_3(request):
    return render(request,'3-3/gameover3-3.html')

def stage4_1(request):
    return render(request,'4-1/stage4-1.html')
def story4_1(request):
    return render(request,'4-1/story4-1.html')
def game4_1(request):
    return render(request,'4-1/game4-1.html')
def head4_1(request):
    return render(request,'4-1/head4-1.html')
def nextstory4_1(request):
    return render(request,'4-1/nextstory4-1.html')
def see4_1(request):
    return render(request,'4-1/see4-1.html')
def see4_1_1(request):
    return render(request,'4-1/see4-1-1.html')
def input4_1(request):
    return render(request,'4-1/input4-1.html')


def stage4_2(request):
    return render(request,'4-2/stage4-2.html')
def story4_2(request):
    return render(request,'4-2/story4-2.html')
def game4_2(request):
    return render(request,'4-2/game4-2.html')
def head4_2(request):
    return render(request,'4-2/head4-2.html')
def nextstory4_2(request):
    return render(request,'4-2/nextstory4-2.html')
def see4_2(request):
    return render(request,'4-2/see4-2.html')
def see4_2_1(request):
    return render(request,'4-2/see4-2-1.html')
def input4_2(request):
    return render(request,'4-2/input4-2.html')

def stage4_3(request):
    return render(request,'4-3/stage4-3.html')
def story4_3(request):
    return render(request,'4-3/story4-3.html')
def game4_3(request):
    return render(request,'4-3/game4-3.html')
def head4_3(request):
    return render(request,'4-3/head4-3.html')
def nextstory4_3(request):
    return render(request,'4-3/nextstory4-3.html')
def see4_3(request):
    return render(request,'4-3/see4-3.html')
def input4_3(request):
    return render(request,'4-3/input4-3.html')

def stage4_4(request):
    return render(request,'4-4/stage4-4.html')
def story4_4(request):
    return render(request,'4-4/story4-4.html')
def game4_4(request):
    return render(request,'4-4/game4-4.html')
def head4_4(request):
    return render(request,'4-4/head4-4.html')
def nextstory4_4(request):
    return render(request,'4-4/nextstory4-4.html')
def see4_4(request):
    return render(request,'4-4/see4-4.html')
def input4_4(request):
    return render(request,'4-4/input4-4.html')

def stage4_5(request):
    return render(request,'4-5/stage4-5.html')
def story4_5(request):
    return render(request,'4-5/story4-5.html')
def game4_5(request):
    return render(request,'4-5/game4-5.html')
def head4_5(request):
    return render(request,'4-5/head4-5.html')
def nextstory4_5(request):
    return render(request,'4-5/nextstory4-5.html')
def see4_5(request):
    return render(request,'4-5/see4-5.html')
def input4_5(request):
    return render(request,'4-5/input4-5.html')

def stage4_6(request):
    return render(request,'4-6/stage4-6.html')
def story4_6(request):
    return render(request,'4-6/story4-6.html')
def game4_6(request):
    return render(request,'4-6/game4-6.html')
def head4_6(request):
    return render(request,'4-6/head4-6.html')
def nextstory4_6(request):
    return render(request,'4-6/nextstory4-6.html')
def see4_6(request):
    return render(request,'4-6/see4-6.html')
def input4_6(request):
    return render(request,'4-6/input4-6.html')
def movie4_6(request):
    return render(request,'4-6/movie4-6.html')
