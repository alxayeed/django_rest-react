from django.shortcuts import render, get_object_or_404
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import mixins, generics
from django.http import JsonResponse
from django.http import HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # def list(self, requeset):
    #     articles = Article.objects.all()
    #     serializer = ArticleSerializer(articles, many=True)
    #     return Response(serializer.data)

    # def create(self, request):
    #     serializer = ArticleSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def retrieve(self, request, pk=None):
    #     queryset = Article.objects.all()
    #     article = get_object_or_404(queryset, pk=pk)
    #     serializer = ArticleSerializer(article)
    #     return Response(serializer.data)

    # def update(self, request, pk=None):
    #     article = Article.objects.get(pk=pk)
    #     serializer = ArticleSerializer(article, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)

    # def destroy(self, request, pk=None):
    #     article = Article.objects.get(pk=pk)
    #     article.delete()
    #     return Response('Item Deleted', status=status.HTTP_404_NOT_FOUND)


"""
''' Generic View '''
class ArticleList(generics.ListCreateAPIView):
    ''' class view for list of articles'''

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
    ''' class view for list of articles'''

    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

"""
'''
@api_view(['GET', 'POST'])
def article_list(request):
    if request.method == "GET":
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def article_details(request, id):
    try:
        article = Article.objects.get(id=id)
    except Article.DoesNotExist:
        return Response('Opps!Not found!', status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ArticleSerializer(article, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        article.delete()
        return HttpResponse(status=204)
'''
