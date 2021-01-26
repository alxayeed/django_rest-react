from rest_framework import serializers
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    """ Serializer for  Article Model"""

    class Meta:
        model = Article
        fields = "__all__"

    # title = serializers.CharField(max_length=100)
    # description = serializers.CharField(max_length=500)

    # def create(self, validated_data):
    #     return Article.objects.create(validated_data)

    # def update(self, instance, validated_data):
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.description = validated_data.get(
    #         'description', instance.description)
    #     instance.save()
    #     return instance
