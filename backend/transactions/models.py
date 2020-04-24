from django.db import models

# Create your models here.


class Transaction(models.Model):
  name = models.CharField(max_length=100)
  date = models.DateField()
  account = models.CharField(max_length=100)
  amount = models.IntegerField()
  category = models.CharField(max_length=100)
  note = models.CharField(max_length=500, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name
