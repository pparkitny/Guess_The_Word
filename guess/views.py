from random import shuffle
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import random
from json import dumps
import json
from django.shortcuts import render, redirect, get_object_or_404


class MainView(View):
    """ 
    This class represent main site of whole app.
    There are words from .txt files and a randomized word for guessing on every page refresh.
    """

    def get(self, request):
        # open file and get 5 letters words that are acceptable in games
        with open('words/acceptable_words.txt', 'r') as f:
            my_words = []  # create list
            for w in f:  # loop for taking every word and put it in list
                my_words.append(w.upper())  # add word to list

        # create long string with these words to easy check if user word is word or if it is acceptable
        all_words = ' '.join(my_words)
        random.shuffle(my_words)  # shuffle list to get random word
        word = my_words[0]  # take first random word

        # send variables to site
        context = {'word': word, 'all_words': all_words}
        return render(request, 'main.html', context)

    def post(self, request):
        return
