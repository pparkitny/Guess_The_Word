from random import shuffle
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import random
from json import dumps
import json
from django.shortcuts import render, redirect, get_object_or_404


class MainView(View):
    """ This class represent main site of whole app
    """

    def get(self, request):
        with open('game_words.txt', 'r') as f:  # open file and get words
            my_words = []  # create list
            for w in f:  # loop for taking every word and put it in list
                my_words.append(w.upper())

        all_words = ' '.join(my_words)
        random.shuffle(my_words)  # shuffle list to get random word
        word = my_words[0]

        context = {'word': word, 'all_words': all_words}
        return render(request, 'main.html', context)

    def post(self, request):
        return
