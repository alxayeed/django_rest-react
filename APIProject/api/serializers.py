from rest_framework import serializers
from .models import Article
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token


class ArticleSerializer(serializers.ModelSerializer):
    """ Serializer for  Article Model"""

    class Meta:
        model = Article
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    """ Serializer for User Model """

    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        # user list api will not return password
        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        # the password will be hashed  in the dabase for every registration
        user = User.objects.create_user(**validated_data)

        # New token will be generated on every registration
        Token.objects.create(user=user)
        return user
