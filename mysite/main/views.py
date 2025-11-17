from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, "html/home.html")

def about(request):
    return render(request, 'html/about.html')
# def about(request):
#     return HttpResponse("Це сторінка про нас")