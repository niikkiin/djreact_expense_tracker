from django.contrib import admin
from .models import Transaction
# Register your models here.

class TransactionAdmin(admin.ModelAdmin):
  list_display = ('name', 'date', 'account', 'amount', 'category')
  search_fields = ('name', 'account', 'category')
  readonly_fields = ()
  filter_horizontal = ()
  list_filter = ()
  fieldsets = ()

admin.site.register(Transaction, TransactionAdmin)
