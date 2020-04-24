from rest_framework import serializers
from .models import Transaction

# Transaction Serializer


class TransactionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Transaction
    fields = '__all__'
