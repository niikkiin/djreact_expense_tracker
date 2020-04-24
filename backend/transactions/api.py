from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer
from .models import Transaction

class TransactionViewSet(viewsets.ModelViewSet):
  queryset = Transaction.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TransactionSerializer
