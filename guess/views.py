from random import shuffle
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import random
from json import dumps
import json
from django.shortcuts import render, redirect, get_object_or_404

# Create your views here.


class MainView(View):
    """ This class represent main site of whole app
    """

    def get(self, request):
        words = ['POLKA', 'LOTEK', 'MROZI']
        random.shuffle(words)
        word = words[0]
        context = {'word': word}
        return render(request, 'main.html', context)

    def post(self, request):

        return
